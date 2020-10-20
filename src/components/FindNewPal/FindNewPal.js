import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './FindNewPal.css'

export default class FindNewPal extends Component {

  renderFindNewPalInterface() {
    const {display_name, bio, location, fa_icon} = this.props.user
    return (
      <div className='find_new_pal'>
        {/* <button onClick={this.handleNewConversation}>Start a new conversation</button> */}
      <FontAwesomeIcon icon={fa_icon}/>
      <p>name: {display_name}</p>
      <p>location: {location}</p>
      <p>bio: {bio}</p>
      <button onClick={this.props.handleNewConversation}>Start New Conversation</button>
      <button onClick={this.props.handleDifferentPal}>Find a different pal</button>
      </div>
    )
  }

  renderOutOfAvailablePalsMessage() {
    return (
      <div className='find_new_pal'>
        No available pals to choose from right now. Try again later.
      </div>
    )
  }

  render() {
    return (
      <>
      {!this.props.availablePals ? this.renderFindNewPalInterface() : this.renderOutOfAvailablePalsMessage()}
      </>
    )

  }
}