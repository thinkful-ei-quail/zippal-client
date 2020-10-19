import React, {Component} from 'react';
import LetterForm from '../LetterForm/LetterForm'
import'./ConversationBubble.css'

export default class ConversationBubble extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'small',
      showForm: false
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

  toggleReplyForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }


  render() {
    const { view, showForm } = this.state
    return (
      <section className={view}>
        {view === 'expanded' && <button onClick={this.shrinkBubble}>Close</button>}
        <button onClick={this.expandBubble}><h2>{this.props.palName}</h2></button>
        {(showForm === true && view !== 'small') && <LetterForm />}
        {(view === 'expanded' && showForm === false) && <button onClick={this.toggleReplyForm}>Reply</button>}
        {(view === 'expanded' && showForm === true) && <button onClick={this.toggleReplyForm}>Back to message</button>}
      </section>
    )
  }
}