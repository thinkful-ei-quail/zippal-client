import React, {Component} from 'react';

export default class ConversationBubble extends Component {
  render() {
    return (
      <li>
        conversation id: {this.props.conversation.id}
      </li>
    )
  }
}