import React,{Component} from 'react';
import MessageService from '../../services/message-api-service';
import UserContext from '../../context/UserContext';
import './Message.css';

class Message extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            pending_content: 'Message in Progress...'
        }
    }

    static contextType = UserContext;

    componentDidMount = () => {
        this.setState({
            pending_content: this.props.newMessage.content
        })
    }

    saveMessageHandler = () => {
        const {pending_content} = this.state
        MessageService.saveMessage(pending_content, this.props.newMessage.id)
    }

    sendMessageHandler = () => {
        const {pending_content} =this.state
        MessageService.sendMessage(pending_content, this.props.newMessage.id)
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
                <label htmlFor='Message_Content'>
                    Create a new message for {this.props.convoData.pal_name}
                </label>
                <textarea
                name='Message_Content_Area'
                type='text'
                id='Message_Content'
                value={this.state.pending_content}
                onChange= {(e) => this.setPendingContent(e.target)}
                />
            </div>
            <div className='Message_Buttons_Container'>
                <button 
                type='button'
                className='Message_Save_Btn' 
                onClick={this.saveMessageHandler}
                >
                    Save Message
                </button>
                <button
                type='button' 
                className='Message_Send_Btn' 
                onClick={this.sendMessageHandler}
                >
                    Send Message to {this.props.convoData.pal_name}
                </button>
            </div>
        </form>
        )
    }

    renderMessage() {
        return (
            <div className='Message_Read'>
                <h3> Message {
                this.context.user.id === this.props.newMessage.sender_id
                ? 'to '
                : 'from '  
                }
                {this.props.convoData.pal_name}
                </h3>
                <p>
                    {this.props.newMessage.content}
                </p>
            </div>
        ) 
    }
    
    render() {
        return this.props.newMessage.sender_status === 'Sent' || this.props.newMessage.sender_status === 'Awaiting Reply'
        ? this.renderMessage()
        : this.renderMessageForm()
    }
}


// Message entry in db will already be completed onclick for new message
// User will need a form to edit existing message entry
// User can send, save, and read message entry based on sender status
// User will see message contents in a <p></p> when updated to sent
// stretch - message content will autosave after 5 minutes of inactivity?

export default Message;