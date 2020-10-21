import React,{Component} from 'react'
import ConversationService from '../../services/conversation-api-service'
import FindNewPal from '../FindNewPal/FindNewPal'
import ConversationBubble from '../ConversationBubble/ConversationBubble'
// import Message from '../Message/Message'
import NewConvoMessage from '../NewConvoMessage/NewConvoMessage'
import MessageService from '../../services/message-api-service'
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
    newConversation: null
  }

  async componentDidMount() {
    const response = await ConversationService.getConversations()
  
      this.setState({
        conversationsRendered: true,
        isOutOfAvailablePals: false,
        activeConversations: response.conversations,
        messages: response.messages
      })    
  }

  handleNewPal = () => {
    let path

    if(this.state.activeConversations.length === 0) {
      path = 'empty'
    } else {
      let userIds = [];
      this.state.activeConversations.forEach((conversation) => {
        userIds.push(conversation.user_1)
        userIds.push(conversation.user_2)
      })
      // loop through active conversations to find each user id that is not us
      // push the user_1 id and user_2 id to an array
      // turn that into a set to filter out any repeats
      // pass that up
      // instantiate an array called userIds
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
    ConversationService.startNewConversation(this.state.foundUser.id)
    .then((conversation) => {
      conversation.pal_name = this.state.foundUser.display_name
      this.setState({
        activeConversations: [...this.state.activeConversations, conversation],
        newConversation: conversation,
        toggleFindNewPalPanel: false
      })
    })
  }

  renderConversationBubbles() {
    const { activeConversations, messages } = this.state
    const convoComponents = []
    for(let i = 0; i < 5; i++) {
      if(activeConversations[i]) {
        convoComponents.push(
          <ConversationBubble 
            key={activeConversations[i].id}
            convoData={activeConversations[i]}
            messageData={messages[i]}
            newMessageHandler={this.newMessageHandler}
            setNewMessage={this.setNewMessage}
          />
        )
      } else {
        convoComponents.push(<button key={`button_${i}`} onClick={this.handleNewPal}>Find a new Pal</button>)
      }
    }
    return convoComponents
  }

  newMessageHandler = async (convo) => {
    return await MessageService.createNewMessage(convo)
  }

  setNewMessage = (newMessage) => {
    const messageArray = this.state.messages;
    
    if(messageArray.length === 0){
      return this.setState({
        messages: [newMessage]
      })
    } 
    
    const index = messageArray.findIndex((messages, i) => {
      if(messages.length === 0) {
        return
      } else if(messages[0].conversation_id === newMessage.conversation_id)
      return i
      })
    if(index === -1){
      messageArray.push([newMessage])
    } else {
      messageArray[index].push(newMessage)
    }
    // for(let i = 0; i < messageArray.length; i++) {
    //   if(messageArray[i][0].conversation_id === newMessage.conversation_id) {
    //     messageArray[i].push(newMessage)
    //   }
    // }

    this.setState({
      messages: messageArray
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

       {toggleFindNewPalPanel 
       ? <FindNewPal 
          handleNewConversation={this.handleNewConversation}
          handleDifferentPal={this.handleDifferentPal}
          user={foundUser}
          availablePals={isOutOfAvailablePals}
          /> 
       : ''}

        {newConversation
        ? <NewConvoMessage 
            newConvoData={{...newConversation, user_2: foundUser.id}} 
            closeNewConvoMessage={this.closeNewConvoMessage} 
            setNewMessage={this.setNewMessage}
          />
        : ''}

        <section className='Active_Conversations'>
          {this.renderConversationBubbles()}
        </section>
      </section>
    )
  }
}