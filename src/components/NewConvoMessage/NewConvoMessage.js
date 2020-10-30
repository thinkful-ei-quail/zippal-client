import React from 'react'
import Message from '../Message/Message'
import './NewConvoMessage.css'

export default class NewConvoMessage extends React.Component {

  render() {
    return (
      <div className='NewConvoMessage__container'>
       <Message 
        convoData={this.props.newConvoData} 
        message={this.props.newMessage} 
        setNewMessage={this.props.setNewMessage}
        closeNewConvoMessage={this.props.closeNewConvoMessage}
        />
      </div>
    )
  }
}