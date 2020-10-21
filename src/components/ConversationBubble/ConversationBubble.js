import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Message from '../Message/Message'
import'./ConversationBubble.css'

export default class ConversationBubble extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'small',
      showForm: false,
      newMessage: null
    }
  }
  
  expandBubble = () => {
    this.setState({
      view: 'expanded'
    })
  }

  shrinkBubble = () => {
    this.setState({
      view: 'small'
    })
  }

  toggleReplyForm = async (convo) => {
    const newMessage = await this.props.newMessageHandler(convo)
    await this.props.setNewMessage(newMessage)
    this.setState({
      showForm: !this.state.showForm
    })
  }

  closeReplyForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  // MESSAGE LOGIC //
  /*
  assuming signed in user is user_1 on the convo:
  1. It is user_1's turn => newest message is not old enough to view => display 2nd to last
    message(the message user_1 last sent) and an indication that message is on the way. No reply button available
    (convo.user_1_turn === true && message.date_sent + 'specifiedTime' > now) return 2nd to last message
  
  2. it is user_1's turn => newest message is old enough and unread(determined by message object is_read in state) => notification showing
    new message available. User opens conversation bubble and sees new message. (mark as read button to make API call?)
    user_1 can then click reply which opens message component and creates new message(API call).
    user_1 can compose a message (controlled component). The message can be saved (using data in state) by clicking save
    (Make API call passing in message id as param and content as req body) or sent (API call passing in
    message id as param and content as req body)
    (convo.user_1_turn === true && message.date_sent + 'specifiedTime' < now) return last message in array, render notification
  
  3. it is user_2's turn; message unread by user_2 => user_1 sees the most recent message sent by them (last message. Sender_id matches user_1 id)
    see current message status (sender_status) on small conversation bubble component
    (convo.user_1_turn === false && messages[messages.length - 1].sender_id === user_1.id) return messages[messages.length - 1] => status = message.receiver_status (sent?)

  4. it is user_2's turn; message is read/new message in draft status => display last sent message and appropriate status
    of current message(read) or new message if applicable(Awaiting Message?)
    (convo.user_1_turn === false && messages[messages.length - 1].sender_id !== user_1.id) return messages[messages.length - 2]

  5. it is user_1's turn(user_2 just sent message) => Go to option 1
  */

  // renderLastMessage () {}

  // responseSent () {}

  // renderSecondToLastMessage () {}

  renderSmallView = () => {
    return (
      <div className='ConversationBubble__convo_card'>

      </div>
    )
  }




  
  render() {
    console.log('conbubble', this.props)
    const { view, showForm } = this.state
    console.log(this.props.messageData)
    return (
      <section className={view}>
        {view === 'expanded' && <button onClick={this.shrinkBubble}>Close</button>}
        <button onClick={this.expandBubble}><h2>{this.props.convoData.pal_name}</h2></button>
        <FontAwesomeIcon icon={this.props.convoData.fa_icon}/>
        {(showForm === true && view !== 'small') && <Message convoData={this.props.convoData} messageData={this.props.messageData} newMessage={this.state.newMessage}/>}
        {(view === 'expanded' && showForm === false) && <button onClick={() => this.toggleReplyForm(this.props.convoData)}>Reply</button>}
        {(view === 'expanded' && showForm === false) && <button onClick={() => this.props.handleEndConvo(this.props.convoData)}>End</button>}
        {(view === 'expanded' && showForm === true) && <button onClick={this.closeReplyForm}>Back to message</button>}
      </section>
    )
  }
}