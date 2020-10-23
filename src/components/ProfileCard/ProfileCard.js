import React, {Component} from 'react'
import UserContext from '../../context/UserContext'
import UserService from '../../services/user-api-service'
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ProfileCard.css'


export default class ProfileCard extends Component {


  static contextType = UserContext


  render() {
    const {fa_icon, username, display_name, location, bio} = this.context.profileInfo
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
              <p>
                <span className="ProfileCard__label">location:</span> <br/> 
                <span className="ProfileCard__data">{location ? location : 'none'}</span>
              </p>
              <p><span className="ProfileCard__label">bio:</span> <br/> 
              <span className="ProfileCard__data">{bio ? bio : 'not available'}</span></p>
            </div>
            {this.renderEditButton()}
          </div>
        </section>
      
    )
  }
}