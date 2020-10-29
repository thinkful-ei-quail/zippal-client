import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FindNewPal.css'

export default class FindNewPal extends Component {

  renderFindNewPalInterface() {
    const {display_name, bio, location, fa_icon} = this.props.user
    return (
      <div className='find_new_pal'>
        <FontAwesomeIcon className='FindNewPal__icon' icon={fa_icon}/>
        <p>name: {display_name}</p>
        <p>location: {location}</p>
        <p>bio: {bio}</p>
        <button className='form_button' onClick={this.props.handleNewConversation}>Start a Conversation</button>
        <button className='form_button' onClick={this.props.handleDifferentPal}>Find a Different Pal</button>
      </div>
    )
  }

  renderOutOfAvailablePalsMessage() {
    return (
      <div className='find_new_pal'>
        <p>No available pals to choose from right now. Try again later.</p>
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