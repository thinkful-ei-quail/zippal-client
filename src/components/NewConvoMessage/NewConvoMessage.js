import React from 'react'
import Message from '../Message/Message'
import MessageService from '../../services/message-api-service'

export default class NewConvoMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      edited: false
    }
  }



  render() {
    const { edited } = this.state
    return (
      <div>
        <h2>Say hello to {this.props.conversation.pal_name}</h2>
        <Message message={this.props.newMessage} conversation={this.props.conversation} /> 
      </div>
    )
  }
}