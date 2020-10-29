import React, {Component} from 'react'
import ProfileView from '../../components/ProfileView/ProfileView'
import UserContext from '../../context/UserContext'



export default class Profile extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  static contextType = UserContext

  handleProfileUpdateSuccess = async() => {
    await this.context.setProfile()
    this.handleReroute()
  }

  handleReroute = () => {
    const {location, history} = this.props
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }

  render(){
    return (
      <section>
        <ProfileView cancelUpdate={this.handleReroute} updateSuccess={this.handleProfileUpdateSuccess}/>
      </section>
    )
  }
}