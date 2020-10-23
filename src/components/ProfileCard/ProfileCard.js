import React, {Component} from 'react'
import UserContext from '../../context/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ProfileCard.css'


export default class ProfileCard extends Component {


  static contextType = UserContext

  renderEditButton() {
    return (
      <button 
      onClick={e => this.props.editProfile(e)} 
      type="button"
      >
        Edit your Profile?
      </button>
    )
  }

  // add in logic for when not pulling data from context - if viewing another person's profile?

  render() {
    const {fa_icon, username, display_name, location, bio} = this.context.profileInfo
    return (
        <section className="ProfileCard">
          <h2>Welcome {display_name}!</h2>
          <div className="ProfileCard_main">
            <div className="ProfileCard__icon_container">
              <FontAwesomeIcon className='ProfileCard__icon_fa fa-8x' icon={fa_icon} />
              <p>{username}</p>
            </div>
            
            <div className="ProfileCard__bio_location">
              <p>
                <span className="ProfileCard__label">location:</span ><br/> {location ? location : 'none'}
              </p>
              <p><span className="ProfileCard__label">bio:</span> <br/> {bio ? bio : 'not available' }</p>
            </div>
            {this.renderEditButton}
          </div>
        </section>
      
    )
  }
}