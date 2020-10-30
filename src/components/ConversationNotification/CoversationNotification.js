import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserContext from '../../context/UserContext'
import './ConversationNotification.css';
import MessageService from '../../services/message-api-service'

class ConversationNotification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alert: false,
      icon: ''
    }
  }

  static contextType = UserContext

  findUnreadMessages = () => {
    const userId = this.context.user.id;
    const messages = this.props.messageData

    if (!messages.length) {
      return
    }

    const lastMessage = messages[messages.length - 1];
    const { receiver_id, receiver_status, sender_id, sender_status, is_read } = lastMessage;

    if (receiver_id === userId && receiver_status === "Received") {
      if(MessageService.calculateMessageDeliveryTime(lastMessage.date_sent) < 6) {
        return 'plane-departure'
      }
      if (!is_read) {
        return "envelope"
      }
      else {
        return "envelope-open"
      }
    }

    if (receiver_id === userId && receiver_status === 'Read') {
      return "envelope-open"
    }

    if (receiver_id === userId && receiver_status === "Awaiting Message") {
      return 'hourglass-half'
    }

    if (sender_id === userId && sender_status === "Sent") {
      if (!is_read) {
        return "paper-plane"
      }
      else {
        return "envelope-open-text"
      }
    }

    if (sender_id === userId && sender_status === "Awaiting Reply") {
      return "envelope-open-text"
    }

    if (sender_id === userId && sender_status === "Pending") {
      return "pen-nib"
    }


  } 

  render() {
    return (
      <div className={`ConversationNotification__icon_container ${this.findUnreadMessages() === "envelope" ? 'red' : 'blue'}`}>
        <FontAwesomeIcon className='ConversationNotification__icon' icon={this.findUnreadMessages()} />
      </div>
    )
  }
}

export default ConversationNotification