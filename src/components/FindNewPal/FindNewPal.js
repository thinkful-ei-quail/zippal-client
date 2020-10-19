import React, {Component} from 'react';

import './FindNewPal.css'

export default class FindNewPal extends Component {
  render() {
    console.log(this.props.user)
    const {display_name, bio, location} = this.props.user
    return (
      <div className='find_new_pal'>
        {/* <button onClick={this.handleNewConversation}>Start a new conversation</button> */}
      <img src="https://images2.imgbox.com/7c/62/nlbSCLvM_o.png"/>
      <p>name: {display_name}</p>
      <p>location: {location}</p>
      <p>bio: {bio}</p>
      </div>
    )
  }
}