import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserContext from '../../context/UserContext'

import './IconSelect.css'

export default class IconSelect extends Component {
  static contextType = UserContext 
  state = {

  }

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

  componentDidMount() {

  }

  renderButtons = () => {
    return this.iconArray.map((icon, index) => {
      return (
        <button key={icon + index} className="IconSelect__button"type="button">
          <FontAwesomeIcon icon={icon} />
        </button>
      );
    });
  };

  render() {
    return <div className="IconSelect">{this.renderButtons()}</div>;
  }
}
