import React from 'react'
import Message from '../Message/Message'

export default class NewConvoMessage extends React.Component {

  render() {
    return (
      <div className='NewConvoMessage__container'>
      {/* <button type='button' onClick={this.props.closeNewConvoMessage}>Close</button> */}
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