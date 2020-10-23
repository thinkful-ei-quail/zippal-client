import React, {Component} from 'react'
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import ProfileCard from '../ProfileCard/ProfileCard'

export default class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      editProfile: false
    }
  }

  handleUpdateProfileSuccess = () => {
    const {location, history} = this.props
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }

  handleProfileEdit = (e) => {
    e.preventDefault()
    this.setState({editProfile: true})
  }

  renderProfileCard = () => {
    return (
      <ProfileCard userProfile={this.state.userProfile}/>
    )
  }

  render() {
    return (
      <div className="profile">
      {/* <section>
        <p>{fa_icon}</p>
        <p>Username: {username}</p>
        <p>display name: {display_name}</p>
        <p>location: {location}</p>
        <p>bio: {bio}</p>
      </section> */}
      {this.state.editProfile 
      ? <ProfileForm updateSuccess={this.handleUpdateProfileSuccess}/>
      : <ProfileCard editProfile={this.handleProfileEdit}/>
      }
      </div>
    )
  }
}