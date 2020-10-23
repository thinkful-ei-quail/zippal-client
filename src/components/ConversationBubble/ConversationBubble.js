import React, {Component} from 'react';
import UserContext from '../../context/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Message from '../Message/Message'
import ConversationNotification from '../ConversationNotification/CoversationNotification'
import'./ConversationBubble.css'
import MessageApiService from '../../services/message-api-service';

export default class ConversationBubble extends Component {
  static contextType = UserContext 
  
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      selectedMessage: null,
      newMessage: null,
      confirmEndConvoPanel: false
    }
  }
  
  toggleBubble = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  formatDate = (date) => {
    return new Date(date).toDateString()
  }


  
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
        if(lastMessage.sender_status === 'Pending' && !lastMessage.is_read) {
        return 'Your pal is working on their response'
      } else if(lastMessage.sender_status === 'Sent') {
        return 'You have a new message(or on the way once we get the timeout)'
      } else if(lastMessage.sender_status === 'Awaiting Reply') {
        return 'Start a reply message'
      }
    }
  }

  renderSmallView = () => {
    return (
      <div className='ConversationBubble__convo_card small' >
        {this.props.messageData.length !== 0 ? <ConversationNotification messageData={this.props.messageData} /> : ''}
        <h2>{this.props.convoData.pal_name}</h2>
        <button onClick={this.toggleBubble}><FontAwesomeIcon className='ConversationBubble__pal_icon' icon={this.props.convoData.fa_icon} /></button>
        <p>Conversation Status: {this.messageStatusMessage()}</p>
        <p>Total Messages: {this.props.messageData.length}</p>
      </div>
    )
  }

  //create messsage containers that display sender name and date message was sent
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
          <p>Date sent: {this.formatDate(message.date_sent)}</p>
          <p>Content: {message.content.substring(0, 30)}...</p>
        </button>
      )
    })

    return messageContainers
  }

  selectMessageHandler = (id) => {
    const selected = this.props.messageData[id]
    this.setState({
      selectedMessage: selected,
    })
    if (!selected.is_read && selected.receiver_id === this.context.user.id) {
        MessageApiService.readMessage(selected)
      }
  }

  clearSelectedMessage = () => {
    this.setState({
      selectedMessage: null
    })
  }

  // confirm user actually wants to delete conversation
  confirmEndConvo = () => {
    this.setState({
      confirmEndConvoPanel: true
    })
  }

  // cancel the end conversation panel
  cancelEndConvo = () => {
    this.setState({
      confirmEndConvoPanel: false
    })
  }

  // render the confirm delete conversation panel
  renderConfirmEndConvoPanel = () => {
    const {handleEndConvo} = this.props
    let convo = (this.props.convoData)

    return (
      <>
      <p>Are you sure you want to delete this conversation? You will lose all of your letters and this cannot be undone.</p>
      <button className="ConversationBubble__end_convo_confirm_btn" onClick={() => handleEndConvo(convo)}>Confirm</button>
      <button className="ConversationBubble__end_convo_confirm_btn" onClick={this.cancelEndConvo}>Cancel</button>
      </>
    )
  }

  // conditionally render reply(create new message) button or continue draft(open last message in text area to continue writing)
  renderExpandedView = () => {
    return (
    <div className='ConversationBubble__convo_card expanded'>
      {this.state.selectedMessage ? <button onClick={this.clearSelectedMessage}>Go back</button>: ''}
      <button onClick={this.toggleBubble}><FontAwesomeIcon className='ConversationBubble__pal_icon' icon={this.props.convoData.fa_icon} /></button>
      <button className="ConversationBubble__end_convo_btn" onClick={this.confirmEndConvo}>
        End Conversation
      </button>
      {!this.state.selectedMessage ? this.renderMessages() : ''}
      {this.state.selectedMessage ? <Message convoData={this.props.convoData} newMessage={this.state.selectedMessage} setNewMessage={this.props.setNewMessage} clearSelectedMessage={this.clearSelectedMessage}/>: ''}
      {this.state.confirmEndConvoPanel ? this.renderConfirmEndConvoPanel() : ''}
    </div>
    )
  }




  
  render() {
    const { expanded } = this.state
    return (
      <>
        {expanded === false ? this.renderSmallView() : this.renderExpandedView()}
      </>
    )
  }
}