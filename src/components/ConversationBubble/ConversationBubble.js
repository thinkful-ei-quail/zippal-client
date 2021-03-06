import React, { Component } from 'react';
import UserContext from '../../context/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Message from '../Message/Message'
import ConversationNotification from '../ConversationNotification/CoversationNotification'
import './ConversationBubble.css'
import MessageService from '../../services/message-api-service';

export default class ConversationBubble extends Component {
  static contextType = UserContext

  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      selectedMessage: null,
      confirmEndConvoPanel: false,
      hideMessage: false,
      edit: false,
      reply: false,
      contentOfPrevious: '',
      hideEditAndReplyButton: false
    }
  }

  toggleBubble = () => {
    window.scrollTo(0, 0)
    this.setState({
      expanded: !this.state.expanded
    })
  }

  formatDate = (date) => {
    return new Date(date).toDateString()
  }



  messageStatusMessage = () => {
    const { messageData } = this.props
    if (!messageData) {
      return 'No messages in this conversation'
    }
    if (messageData.length === 0) {
      return 'No messages in this conversation'
    }
    const lastMessage = messageData[messageData.length - 1]
    //if logged in user was the sender of the most recent message
    if (lastMessage.sender_id === this.context.user.id) {
      //message has been created but not sent
      if (lastMessage.sender_status === 'Pending') {
        return 'Keep working on your current draft'
        //message has been sent, other user hasn't started new reply yet
      } else if (lastMessage.sender_status === 'Sent' && lastMessage.is_read === false) {
        return 'Your message is on it\'s way'
      } else if(lastMessage.sender_status === 'Sent' && lastMessage.is_read === true) {
        return 'Your pal has seen your message'
      } else if (lastMessage.sender_status === 'Awaiting Reply') {
        return 'Your pal has seen your message'
      }
      //if logged in user is the receiver of the most recent message
    } else if (lastMessage.sender_id !== this.context.user.id) {
      // Pal has seen logged in user's message and started a reply
      if (lastMessage.sender_status === 'Pending' && !lastMessage.is_read) {
        return 'Your pal is working on their response'
      } else if (lastMessage.sender_status === 'Sent') {
        //find out if message is old enough to read
        if (MessageService.calculateMessageDeliveryTime(lastMessage.date_sent) >= 6) {
          return 'You have a new message'
        } else {
          return 'Your incoming message will be delivered soon'
        }
      } else if (lastMessage.sender_status === 'Awaiting Reply') {
        return 'Start a reply message'
      }
    }
  }

  renderSmallView = () => {
    return (
      <button className='ConversationBubble__convo_card small' onClick={this.toggleBubble} disabled={this.props.newConvoStarted}>
        {this.props.messageData.length !== 0 ? <ConversationNotification messageData={this.props.messageData} /> : ''}
        <h2>{this.props.convoData.pal_name}</h2>
        <div className='ConversationBubble__pal_icon'><FontAwesomeIcon icon={this.props.convoData.fa_icon} /></div>
        <p>Conversation Status: {this.messageStatusMessage()}</p>
        <p>Total Messages: {this.props.messageData.length}</p>
      </button>
    )
  }

  //create messsage containers that display sender name and date message was sent
  //these messages can be selected to view the content
  renderMessages = () => {
    const { messageData } = this.props
    const { user } = this.context

    if (messageData.length === 0) {
      return <span>No messages to display yet</span>
    }

    const messageContainers = messageData.sort((a, b) => a.id - b.id).map((message, i) => {
      if ((message.receiver_id === user.id && message.date_sent && MessageService.calculateMessageDeliveryTime(message.date_sent) >= 6) || (message.sender_id === user.id)) {
        return (
          <button
            onClick={() => this.selectMessageHandler(i, message)}
            key={message.id}
            className={`ConersationBubble__message_select ${this.state.selectedMessage ? 'disabled' : '' }`}
            disabled={this.state.selectedMessage}
          >
            <p className='ConversationBubble__message_desc'>{message.sender_id === this.context.user.id ? 'Outgoing' : 'Incoming'}</p>
            {message.date_sent ? <p>Date sent: {this.formatDate(message.date_sent)}</p> : ''}
            <p>Content: {message.content.substring(0, 30)}...</p>
          </button>
        )
      }
      return null
    })

    return messageContainers
  }

  //on click handler that sets clicked on message to be passed to the message component
  selectMessageHandler = async (index) => {
    const selected = this.props.messageData[index]
    await this.setState({
      selectedMessage: selected,
    })
    if (!selected.is_read && selected.receiver_id === this.context.user.id) {
      await MessageService.readMessage(selected)
      this.props.handleReadMessage(selected)

    }
  }

  //Nullifies various pieces of state once a message has been acted upon so that other actions can be taken
  clearSelectedMessage = () => {
    this.setState({
      selectedMessage: null,
      reply: false,
      edit: false,
      contentOfPrevious: '',
      hideEditAndReplyButton: false,
      hideMessage: false
    })
  }

  // confirm user actually wants to delete conversation
  confirmEndConvo = () => {
    this.setState({
      confirmEndConvoPanel: true,
      selectedMessage: {content: ' '}
    })
  }

  // cancel the end conversation panel
  cancelEndConvo = () => {
    this.setState({
      confirmEndConvoPanel: false,
      selectedMessage: null
    })
  }

  // render the confirm delete conversation panel
  renderConfirmEndConvoPanel = () => {
    const { handleEndConvo } = this.props
    let convo = (this.props.convoData)

    return (
      <>
        <p>Are you sure you want to delete this conversation? You will lose all of your letters and this cannot be undone.</p>
        <button className="ConversationBubble__end_convo_confirm_btn form_button" onClick={() => handleEndConvo(convo)}>Confirm</button>
        <button className="ConversationBubble__end_convo_confirm_btn form_button" onClick={this.cancelEndConvo}>Cancel</button>
      </>
    )
  }

  //Edit mode allows for correct handling of selected message by Message component
  startEditing = () => {
    this.setState({
      edit: true,
      hideEditAndReplyButton: true
    })
  }

  //Creates new message and sets it to selectedMessage so it can be passed to Message component. also sets the content of the message the reply is
  //being written for to contentOfPreviousReply so that the message is visible during the reply
  startReply = async () => {
    const { selectedMessage } = this.state
    const { convoData } = this.props
    const contentOfPrevious = selectedMessage.content
    const receivingUser = convoData.user_1 === this.context.user.id ? convoData.user_2 : convoData.user_1
    const newMessage = await MessageService.createNewMessage(convoData, receivingUser)
    this.setState({
      selectedMessage: newMessage,
      contentOfPrevious,
      reply: true,
      hideEditAndReplyButton: true
    })
  }

  //Render buttons for appropriate actions based on conversation/message status
  renderActionButton = () => {
    const { convoData, messageData } = this.props
    const { selectedMessage } = this.state
    const { user } = this.context
    if (selectedMessage.sender_id === user.id && selectedMessage.date_sent === null) {
      return (
        <button
          className='ConversationBubble__action_btn form_button'
          type='button'
          onClick={this.startEditing}
        >
          Edit
        </button>
      )
    }
    if ((convoData.user_1 === user.id && convoData.user_1_turn === true && selectedMessage.id === messageData[messageData.length - 1].id)
      || (convoData.user_2 === user.id && convoData.user_2_turn === true && selectedMessage.id === messageData[messageData.length - 1].id)) {
      return (
        <button
          className='ConversationBubble__action_btn form_button'
          type='button'
          onClick={this.startReply}
        >
          Reply
        </button>
      )
    }
  }

  // conditionally render reply(create new message) button or continue draft(open last message in text area to continue writing)
  renderExpandedView = () => {
    const { selectedMessage, confirmEndConvoPanel, hideMessage, reply, edit, contentOfPrevious, hideEditAndReplyButton } = this.state
    return (
      <div className='ConversationBubble__convo_card expanded'>

        {/*Navigation buttons for ConversationBubble */}
        <div className='ConversationBubble__nav'>
          <button onClick={this.toggleBubble}>
            <FontAwesomeIcon className='ConversationBubble__window_close' icon="window-close" />
          </button>
          {selectedMessage ? <button onClick={this.clearSelectedMessage}>Close Message</button> : ''}
          <button className="ConversationBubble__end_convo_btn" onClick={this.confirmEndConvo}>
            End Conversation
        </button>
        </div>
        {/* Message buttons */}
        <div className='conversationBubble__message_wrapper'>
          <div className='ConversationBubble__messages_container'>{this.renderMessages()}</div>
          {/* Display currently selected message and action buttons */}
          <div className={`ConversationBubble__content ${selectedMessage ? " " : "transparent"}`}>
            {confirmEndConvoPanel ? this.renderConfirmEndConvoPanel() : ''}
            {selectedMessage && selectedMessage.content !== ' ' ? <button className='form_button' type='button' onClick={() => this.setState({ hideMessage: !this.state.hideMessage })}>{hideMessage ? 'Show message' : 'Hide message'}</button> : ''}
            {selectedMessage && !hideMessage
              ? (
                <>
                  <p className='ConversationBubble__message_text'>{reply ? contentOfPrevious : selectedMessage.content}</p>
                  {hideEditAndReplyButton ? '' : this.renderActionButton()}
                </>
              )
              : ''}
            <div className='ConversationBubble__form_container'>
              {(reply || edit)
                ? <Message
                  convoData={this.props.convoData}
                  message={this.state.selectedMessage}
                  setNewMessage={this.props.setNewMessage}
                  clearSelectedMessage={this.clearSelectedMessage}
                  updateConvoTurns={this.props.updateConvoTurns}
                />
                : ''}
            </div>
          </div>
        </div>
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


