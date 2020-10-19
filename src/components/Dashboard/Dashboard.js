import React,{Component} from 'react'
import ConversationService from '../../services/conversation-api-service'
import ConversationBubble from '../ConversationBubble/ConversationBubble'
import './Dashboard.css'

export default class Dashboard extends Component{

  state = {
    foundUser: {},
    conversationsRendered: false,
    activeConversations: [],
    messages: []
  }

  async componentDidMount() {
    const response = await ConversationService.getConversations()
    
      console.log(response)

      this.setState({
        conversationsRendered: true,
        activeConversations: response.conversations
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
      path = userIds.join('%20');
      console.log(path)
    }

    ConversationService.findNewPal(path).then((pal) => {
      
      console.log(pal)
      this.setState({
        foundUser: pal
      })
    })
  }

  handleNewConversation = (e) => {
    console.log(this.state.foundUser.id)
    ConversationService.startNewConversation(this.state.foundUser.id)
    .then((conversation) => {
    console.log(conversation)
    })
  }

  renderConversationBubbles() {
    const {activeConversations} = this.state
    const convoComponents = []
    for(let i = 0; i < 5; i++) {
      if(activeConversations[i]) {
        convoComponents.push(
          <ConversationBubble 
            key={activeConversations[i].id}
            palName={activeConversations[i].pal_name}
            dateCreated={activeConversations[i].date_created}

          />
        )
      } else {
        convoComponents.push(<button key={`button_${i}`} onClick={this.handleNewPal}>Find a new Pal</button>)
      }
    }
    return convoComponents
  }

  render() {
    return (
      <section className='dashboard'>
        <section className='new_conversation'>
          <button onClick={this.handleNewPal}>Find a new Pal</button>
          <button onClick={this.handleNewConversation}>Start a new conversation</button>
        </section>
        <section className='Active_Conversations'>
          <p>new conversations go here</p>
          {this.renderConversationBubbles()}
        </section>
      </section>
    )
  }
}