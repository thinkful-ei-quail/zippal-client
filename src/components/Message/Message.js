import React,{Component} from 'react';
import MessageService from '../../services/message-api-service';
import UserContext from '../../context/UserContext';
import './Message.css';

// taking in status as props from dashboard??

class Message extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            pending_content: 'Message in Progress ...'
        }
    }

    static contextType = UserContext;

    saveMessageHandler = (e) => {
        e.preventDefault()
        const {content} = e.target

        MessageService.saveMessage(content.value)
            .then(() => {
                this.setState({
                    pending_content: 'Message in Progress ...'
                })
            })
            .catch(this.context.setError)
    }

    sendMessageHandler = (e) => {
        const {content} = e.target

        MessageService.sendMessage(content.value)
          .then(() => this.setState({
              pending_content: 'Message in Progress'
          }))
          .catch(this.context.setError)

    }


    renderMessageForm() {
        return (
        <form className='Message_Form'>
            <div className='Message_Container'>
                <label htmlFor='Message_Content'>
                    Create a new message for {this.props.pal}
                </label>
                <textarea
                name='Message_Content_Area'
                type='text'
                id='Message_Content'
                value={this.state.content === 'Message in Progress ...' ? this.props.content : this.state.pending_content }
                onChange= {(e) => this.setState({pending_context: e.target.value})}
                />
            </div>
            <div className='Message_Buttons_Container'>
                <button 
                className='Message_Save_Btn' 
                type='submit'
                onSubmit={this.saveMessageHandler()}
                >
                    Save Message
                </button>
                <button 
                className='Message_Send_Btn' 
                type='submit'
                onSubmit={this.sendMessageHandler()}
                >
                    Send Message to {this.props.pal}
                </button>
            </div>
        </form>
        )
    }

    // so far we've considered the user sending the message
    // should we be checking for user so we can update message status?
    // user data is stored in the context, (id, username, display_name)

    renderMessage() {
        return (
            <div className='Message_Read'>
                <h3> Message {
                this.context.id === this.props.sender_id
                ? 'to '
                : 'from '  
                }
                {this.props.pal}
                </h3>
                <p>
                    {this.props.content}
                </p>
            </div>
        ) 
    }
    
    render() {
        return this.props.sender_status === 'Sent'
        ? <this.renderMessage/>
        : <this.renderMessageForm/>
    }
}


// Message entry in db will already be completed onclick for new message
// User will need a form to edit existing message entry
// User can send, save, and read message entry based on sender status
// User will see message contents in a <p></p> when updated to sent
// stretch - message content will autosave after 5 minutes of inactivity?

export default Message;