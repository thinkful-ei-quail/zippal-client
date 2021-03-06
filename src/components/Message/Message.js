import React, { Component } from 'react';
import MessageService from '../../services/message-api-service';
import UserContext from '../../context/UserContext';
import './Message.css';

class Message extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pending_content: 'Message in Progress...',
    }
  }

    static contextType = UserContext;

    componentDidMount = () => {
        this.setState({
            pending_content: this.props.message.content
        })
    }

    saveMessageHandler = async () => {
        const { pending_content } = this.state
        const message = await MessageService.saveMessage(pending_content, this.props.message.id)
        this.props.setNewMessage(message)
        if(this.props.clearSelectedMessage) {
        this.props.clearSelectedMessage()
        } else {
        this.props.closeNewConvoMessage()
        }
    }

    sendMessageHandler = async () => {
        const { pending_content } = this.state
        const message = await MessageService.sendMessage(pending_content, this.props.message.id)
        this.props.setNewMessage(message)
        if(this.props.clearSelectedMessage) {
        this.props.clearSelectedMessage()
        } else {
        this.props.closeNewConvoMessage()
        }
    }

    setPendingContent = (e) => {
        this.setState({
        pending_content: e.value
        })
    }

    renderMessageForm() {
        return (
        <form className='Message_Form'>
            <div className='Message_Container'>
            <label className='Message__header' htmlFor='Message_Content'>
                Create a new message for {this.props.convoData.pal_name}
            </label>
            <textarea
                name='Message_Content_Area'
                className='Message__textarea'
                type='text'
                id='Message_Content'
                value={this.state.pending_content}
                onChange={(e) => this.setPendingContent(e.target)}
            />
            </div>
            <div className='Message_Buttons_Container'>
            <button
                type='button'
                className='Message_Save_Btn form_button'
                onClick={this.saveMessageHandler}
            >
                Save Message
                    </button>
            <button
                type='button'
                className='Message_Send_Btn form_button'
                onClick={this.sendMessageHandler}
            >
                Send Message to {this.props.convoData.pal_name}
            </button>
            </div>
        </form>
        )
    }

  render() {
    return (
      <>
        {this.renderMessageForm()}
      </>
      )
  }
}

export default Message;