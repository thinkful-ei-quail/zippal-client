import React, {Component} from 'react'
import ProfileView from '../../components/ProfileView/ProfileView'



export default class Profile extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleProfileUpdateSuccess = () => {
    const {location, history} = this.props
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }

  render(){
    return (
      <section>
        <ProfileView updateSuccess={this.handleProfileUpdateSuccess}/>
      </section>
    )
  }
}