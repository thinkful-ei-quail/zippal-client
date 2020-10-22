import React, {Component} from 'react';
import UserContext from '../../context/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Message from '../Message/Message'
import ConversationNotification from '../ConversationNotification/CoversationNotification'
import'./ConversationBubble.css'

export default class ConversationBubble extends Component {
  static contextType = UserContext 
  
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      selectedMessage: null,
      newMessage: null
    }
  }
  
  toggleBubble = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }


  // toggleReplyForm = async (convo) => {
  //   const newMessage = await this.props.newMessageHandler(convo)
  //   await this.props.setNewMessage(newMessage)
  //   this.setState({
  //     showForm: !this.state.showForm
  //   })
  // }

  // closeReplyForm = () => {
  //   this.setState({
  //     showForm: !this.state.showForm
  //   })
  // }

  // MESSAGE LOGIC //
  /*
  assuming signed in user is user_1 on the convo:
  1. It is user_1's turn => newest message is not old enough to view => display 2nd to last
    message(the message user_1 last sent) and an indication that message is on the way. No reply button available
    (convo.user_1_turn === true && message.date_sent + 'specifiedTime' > now) return 2nd to last message
  
  2. it is user_1's turn => newest message is old enough and unread(determined by message object is_read in state) => notification showing
    new message available. User opens conversation bubble and sees new message. (mark as read button to make API call?)
    user_1 can then click reply which opens message component and creates new message(API call).
    user_1 can compose a message (controlled component). The message can be saved (using data in state) by clicking save
    (Make API call passing in message id as param and content as req body) or sent (API call passing in
    message id as param and content as req body)
    (convo.user_1_turn === true && message.date_sent + 'specifiedTime' < now) return last message in array, render notification
  
  3. it is user_2's turn; message unread by user_2 => user_1 sees the most recent message sent by them (last message. Sender_id matches user_1 id)
    see current message status (sender_status) on small conversation bubble component
    (convo.user_1_turn === false && messages[messages.length - 1].sender_id === user_1.id) return messages[messages.length - 1] => status = message.receiver_status (sent?)

  4. it is user_2's turn; message is read/new message in draft status => display last sent message and appropriate status
    of current message(read) or new message if applicable(Awaiting Message?)
    (convo.user_1_turn === false && messages[messages.length - 1].sender_id !== user_1.id) return messages[messages.length - 2]

  5. it is user_1's turn(user_2 just sent message) => Go to option 1
  */

  // renderLastMessage () {}

  // responseSent () {}

  // renderSecondToLastMessage () {}

  messageStatusMessage = () => {
    const { messageData } = this.props
    if(!messageData) {
      return 'No messages in this conversation'
    }
    if(messageData.length === 0) {
      return 'No messages in this conversation'
    }
    const lastMessage = messageData[messageData.length - 1]
    //if logged in user was the sender of the most recent message
    if(lastMessage.sender_id === this.context.user.id) {
      //message has been created but not sent
      if(lastMessage.sender_status === 'Pending') {
        return 'Keep working on your current draft'
        //message has been sent, other user hasn't started new reply yet
      } else if(lastMessage.sender_status === 'Sent'){
        return 'Your message is on it\'s way'
      } else if(lastMessage.sender_status === 'Awaiting Reply') {
        return 'Your pal has seen your message'
      }
      //if logged in user is the receiver of the most recent message
    } else if(lastMessage.sender_id !== this.context.user.id) {
      // Pal has seen logged in user's message and started a reply
      if(lastMessage.sender_status === 'Pending' && lastMessage.is_read) {
        return 'Your pal is working on their response'
      } else if(lastMessage.sender_status === 'Sent') {
        return 'You have a new message(or on the way once we get the timeout)'
      }
    }
  }

  renderSmallView = () => {
    return (
      <div className='ConversationBubble__convo_card small' >
        <h2>{this.props.convoData.pal_name}</h2>
        <button onClick={this.toggleBubble}><FontAwesomeIcon className='ConversationBubble__pal_icon' icon={this.props.convoData.fa_icon} /></button>
        <p>Conversation Status: {this.messageStatusMessage()}</p>
        <p>Conversation Start Date: {this.props.convoData.date_created}</p>
        <p>Total Messages: {this.props.messageData.length}</p>
      </div>
    )
  }

  //create little messsage containers that display sender name and date message was sent
  //these messages can be selected to view the content
  renderMessages = () => {
    const { messageData } = this.props
    
    if(messageData.length === 0) {
      return <span>No messages to display yet</span>
    }

    const messageContainers = messageData.map((message, i) => {
      return (
        <button onClick={() => this.selectMessageHandler(i)} key={message.id} className='ConersationBubble__message_select'>
          <p>{message.sender_id === this.context.user.id ? 'Outgoing': 'Incoming'}</p>
          <p>Date sent: {message.date_sent}</p>
          <p>Content: {message.content.substring(0, 30)}...</p>
        </button>
      )
    })

    return messageContainers
  }

  selectMessageHandler = (id) => {
    this.setState({
      selectedMessage: this.props.messageData[id],
    })
  }

  // conditionally render reply(create new message) button or continue draft(open last message in text area to continue writing)
  renderExpandedView = () => {
    return (
    <div className='ConversationBubble__convo_card expanded'>
      <button onClick={this.toggleBubble}><FontAwesomeIcon className='ConversationBubble__pal_icon' icon={this.props.convoData.fa_icon} /></button>
      {!this.state.selectedMessage ? this.renderMessages() : ''}
      {this.state.selectedMessage ? <Message convoData={this.props.convoData} newMessage={this.state.selectedMessage}/>: ''}
    </div>
    )
  }




  
  render() {
    const { expanded } = this.state
    return (
      <section className={expanded}>
        {expanded === false ? this.renderSmallView() : this.renderExpandedView()}
        {!this.props.messageData ? '' : <ConversationNotification messageData={this.props.messageData}/> }
        <button onClick={this.expandBubble}><h2>{this.props.convoData.pal_name}</h2></button>
        {this.props.convoData.fa_icon ? <FontAwesomeIcon icon={this.props.convoData.fa_icon}/> : '' }
      </section>
    )
  }
}