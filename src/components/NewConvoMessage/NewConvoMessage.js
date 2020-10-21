import React from 'react'
import Message from '../Message/Message'
import MessageService from '../../services/message-api-service'

export default class NewConvoMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      composeMessage: false,
      newMessage: null
    }
  }

  handleComposeNewMessage = async () => {
    const newMessage =  await MessageService.createNewMessage(this.props.newConvoData)
    await this.props.setNewMessage(newMessage)
    this.setState({
      composeMessage: true,
      newMessage
    })
  }

  render() {
    const { composeMessage, newMessage } = this.state
    return (
      <div className='NewConvoMessage__container'>
        <h2>Say hi to your new pal!</h2>
        { composeMessage ? <Message convoData={this.props.newConvoData} newMessage={newMessage} /> : <button onClick={this.handleComposeNewMessage}>Start your first message</button> }
      </div>
    )
  }
}