import React,{Component} from 'react'
import ConversationService from '../../services/conversation-api-service'
import FindNewPal from '../FindNewPal/FindNewPal'
import ConversationBubble from '../ConversationBubble/ConversationBubble'
import NewConvoMessage from '../NewConvoMessage/NewConvoMessage'
import MessageService from '../../services/message-api-service'
import UserContext from '../../context/UserContext'
import './Dashboard.css'

export default class Dashboard extends Component{

  state = {
    toggleFindNewPalPanel: false,
    toggleNewMessagePanel: false,
    isOutOfAvailablePals: false,
    foundUser: {},
    conversationsRendered: false,
    activeConversations: [],
    messages: [],
    newConversation: null,
    newMessage: null
  }

  static contextType = UserContext

  async componentDidMount() {
    const response = await ConversationService.getConversations()
    response.conversations.sort((a,b) => a.id - b.id)
    response.messages.sort((a,b) => a[0].id - b[0].id)
      this.setState({
        conversationsRendered: true,
        isOutOfAvailablePals: false,
        activeConversations: response.conversations,
        messages: response.messages
      })
    console.log(this.state.activeConversations)
  }

  handleNewPal = () => {
    let path

    if(this.state.activeConversations.length === 0) {
      path = 'empty'
    } else {
      let userIds = [];
      // loop through active conversations to find each user id
      // push the user_1 id and user_2 id to an array
      this.state.activeConversations.forEach((conversation) => {
        userIds.push(conversation.user_1)
        userIds.push(conversation.user_2)
      })
      // turn that into a set to filter out any repeats
      userIds = [...new Set(userIds)]
      path = userIds.join('%20')
    }

    if(this.state.toggleFindNewPalPanel) {
      this.setState({
        toggleFindNewPalPanel: !this.state.toggleFindNewPalPanel
      })
    } else {
      ConversationService.findNewPal(path).then((pal) => {
        this.setState({
          toggleFindNewPalPanel: !this.state.toggleFindNewPalPanel,
          foundUser: pal
        })
      }).then((pal) => {
        if(this.state.foundUser.error) {
          this.setState({
            isOutOfAvailablePals: true
          })
        }
      })

    }
  }

  handleDifferentPal = () => {
    let path

    if(this.state.activeConversations.length === 0) {
      path = 'empty'
    } else {
      let userIds = [];
      this.state.activeConversations.forEach((conversation) => {
        userIds.push(conversation.user_1)
        userIds.push(conversation.user_2)
      })
    
      userIds = [...new Set(userIds)]
      path = userIds.join('%20')
    }

   
      ConversationService.findNewPal(path).then((pal) => {   
        this.setState({
          foundUser: pal
        })
      })

  }

  handleNewConversation = (e) => {
    const {id, display_name} = this.state.foundUser
    const pal_name = display_name
    ConversationService.startNewConversation(id)
      .then((conversation) => {
        conversation.pal_name = pal_name
        const receivingUser = conversation.user_1 === this.context.user.id ? conversation.user_2 : conversation.user_1
        MessageService.createNewMessage(conversation, receivingUser)
          .then((message) => {
            const messagesInState = this.state.messages
            messagesInState.push([message])
            this.setState({
              activeConversations: [...this.state.activeConversations, conversation],
              newConversation: conversation,
              toggleFindNewPalPanel: false,
              messages: messagesInState,
              newMessage: message
            })
          })
      })
  }

  handleEndConvo = (convo) => {
    const convoId = convo.id
    ConversationService.endConversation(convoId)
    .then(() => {
      let activeConversations = this.state.activeConversations
      let updatedActiveConvos = activeConversations.filter((c) => {
        return c.id !== convoId})
      this.setState({
        activeConversations: updatedActiveConvos
      })
    })
  }

  renderConversationBubbles() {
    const { activeConversations, messages } = this.state
    const convoComponents = []
  
    for(let i = 0; i < 5; i++) {
      if(activeConversations[i] && messages.length !== 0) {
        convoComponents.push(
          <ConversationBubble 
            key={activeConversations[i].id}
            convoData={activeConversations[i]}
            messageData={messages[i]}
            newMessageHandler={this.newMessageHandler}
            setNewMessage={this.setNewMessage}
            handleEndConvo={this.handleEndConvo}
            updateConvoTurns={this.updateConvoTurns}
          />
        )
      } else {
        convoComponents.push(<button className="Dashboard__newPal_button" key={`button_${i}`} onClick={this.handleNewPal}>Find a new Pal</button>)
      }
    }
    return convoComponents.sort((a,b) => a.id - b.id)
  }

  newMessageHandler = async (convo) => {
    return await MessageService.createNewMessage(convo)
  }

  setNewMessage = (newMessage) => {
    const messageArray = this.state.messages;
    const conversations = this.state.activeConversations
    if(messageArray.length === 0){
      return this.setState({
        messages: [newMessage]
      })
    } 
    //Find and update message or add new message to array
    const index = messageArray.findIndex(messages => (messages.length !== 0 && messages[0].conversation_id === newMessage.conversation_id))
    if(index === -1){
      messageArray.push([newMessage])
    } else if(messageArray[index][messageArray[index].length - 1].id === newMessage.id){
      messageArray[index][messageArray[index].length - 1] = newMessage
    } else {
      messageArray[index].push(newMessage)
    }

    //find and update conversation turns now that message has been sent
    for(let i = 0; i < conversations.length; i++) {
      if(conversations[i].id === newMessage.conversation_id) {
        console.log(conversations[i])
        conversations[i].user_1_turn = !conversations[i].user_1_turn
        conversations[i].user_2_turn = !conversations[i].user_2_turn
        break
      }
    }
    this.setState({
      messages: messageArray,
      activeConversations: conversations
    })
  }

  closeNewConvoMessage = () => {
    this.setState({
      newConversation: null
    })
  }

  render() {
    const { toggleFindNewPalPanel, newConversation, isOutOfAvailablePals, foundUser } = this.state
    return (
      <section className='dashboard'>
        <div className='welcome_text'>
        Welcome, {this.context.user.display_name}!<br/> Write a message to your pals!
        </div>

       {toggleFindNewPalPanel 
       ? <FindNewPal 
          handleNewConversation={this.handleNewConversation}
          handleDifferentPal={this.handleDifferentPal}
          user={foundUser}
          availablePals={isOutOfAvailablePals}
          /> 
       : ''}

        {newConversation && this.state.activeConversations.length !== 0
        ? <NewConvoMessage 
            newConvoData={newConversation} 
            newMessage={this.state.newMessage}
            setNewMessage={this.setNewMessage}
            closeNewConvoMessage={this.closeNewConvoMessage}
          />
        : ''}

        <section className='Active_Conversations'>
          {this.renderConversationBubbles()}
        </section>
      </section>
    )
  }
}