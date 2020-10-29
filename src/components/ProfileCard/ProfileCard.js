import React, { Component } from 'react'
import UserContext from '../../context/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ProfileCard.css'


export default class ProfileCard extends Component {
  static contextType = UserContext

  renderEditButton() {
    const {bio, location} = this.context.profileInfo
    return (
      <button
        className='form_button'
        onClick={e => this.props.editProfile(e)}
        type="button"
      >
        {!bio || !location ? 'Tell us more about yourself' : 'Update Profile'}
      </button>
    )
  }


  render() {
    const { fa_icon, username, display_name, location, bio } = this.context.profileInfo
    const defaultIcon = 'user-circle'
    return (
      <section className="ProfileCard">
        <h2>Welcome {display_name}!</h2>
        <div className="ProfileCard_main">
          <div className="ProfileCard__icon_container">
            <FontAwesomeIcon className='ProfileCard__icon_fa fa-8x' icon={fa_icon ? fa_icon : defaultIcon} />
            <p>{username}</p>
          </div>

          <div className="ProfileCard__bio_location">
            <p className="ProfileCard__label">location:</p>
            <p className="ProfileCard__data">{location ? location : 'none'}</p>
            <p className="ProfileCard__label">bio:</p>
            <p className="ProfileCard__data">{bio ? bio : 'not available'}</p>
          </div>
          {this.renderEditButton()}
        </div>
      </section>

    )
  }
}