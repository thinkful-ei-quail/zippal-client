import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserContext from '../../context/UserContext'

import './IconSelect.css'

export default class IconSelect extends Component {
  static contextType = UserContext 
  
  iconArray = [
    'theater-masks', 
    'university', 
    'snowboarding', 
    'paw', 
    'palette',
    'mountain',
    'music',
    'motorcycle',
    'laptop-code',
    'gamepad',
    'futbol',
    'dumbbell',
    'dog',
    'chess',
    'cat',
    'caravan',
    'camera-retro',
    'bowling-ball',
    'user-circle',
    'anchor',
    'biking'
  ];


  selectIcon = (index) => {
    console.log(this.iconArray[index])
    let icon = this.iconArray[index]
    this.props.handleChangeIcon(icon)

  }

  renderButtons = () => {
    return this.iconArray.map((icon, index) => {
      return (
        <button key={icon + index} id={icon} className="IconSelect__button" type="button" onClick={() => this.selectIcon(index)}>
          <FontAwesomeIcon icon={icon} />
        </button>
      );
    });
  };

  render() {
    return (
      <section>
        <h4>Select your icon:</h4>
        <div className="IconSelect">
          {this.renderButtons()}
        </div>
      </section>
    )
  }
}
