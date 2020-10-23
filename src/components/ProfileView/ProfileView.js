import React, {Component} from 'react'
import UserContext from '../../context/UserContext'
import UserService from '../../services/user-api-service'
import ProfileForm from '../../components/ProfileForm/ProfileForm'
<<<<<<< HEAD
import ProfileCard from '../../components/ProfileCard/ProfileCard'

export default class Profile extends Component {
  state = {
    userProfile: {},
    dataLoaded: false
=======

export default class Profile extends Component {
  state = {
    userProfile: {}
>>>>>>> master
  }

  static contextType = UserContext

  async componentDidMount() {
    console.log(this.context.user.id)
    let [userProfile] = await UserService.getUserInfo(this.context.user.id)
    console.log(userProfile)
    this.setState({
<<<<<<< HEAD
      userProfile,
      dataLoaded: true
=======
      userProfile
>>>>>>> master
    })
}

handleUpdateProfile = async () => {
 const [updatedProfile] = await UserService.getUserInfo(this.context.user.id);
 console.log(updatedProfile)
 this.setState({
   userProfile: updatedProfile
 })
}

<<<<<<< HEAD
  renderProfileCard = () => {
    return (
      <ProfileCard userProfile={this.state.userProfile}/>
    )
  }

  render() {
    return (
      <div className="profile">
      {this.state.dataLoaded ? this.renderProfileCard() : ''}
=======
  render() {
    const {bio, location, username, display_name, fa_icon} = this.state.userProfile
    return (
      <div className="profile">

      <section>
        <p>{fa_icon}</p>
        <p>Username: {username}</p>
        <p>display name: {display_name}</p>
        <p>location: {location}</p>
        <p>bio: {bio}</p>
      </section>

>>>>>>> master
      <ProfileForm handleUpdateProfile={this.handleUpdateProfile}/>
      </div>
    )
  }
}