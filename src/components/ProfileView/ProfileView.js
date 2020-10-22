import React, {Component} from 'react'
import UserContext from '../../context/UserContext'
import UserService from '../../services/user-api-service'
import ProfileForm from '../../components/ProfileForm/ProfileForm'

export default class Profile extends Component {
  state = {
    userProfile: {}
  }

  static contextType = UserContext

  async componentDidMount() {
    console.log(this.context.user.id)
    let [userProfile] = await UserService.getUserInfo(this.context.user.id)
    console.log(userProfile)
    this.setState({
      userProfile
    })
}

handleUpdateProfile = async () => {
 const [updatedProfile] = await UserService.getUserInfo(this.context.user.id);
 console.log(updatedProfile)
 this.setState({
   userProfile: updatedProfile
 })
}

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

      <ProfileForm handleUpdateProfile={this.handleUpdateProfile}/>
      </div>
    )
  }
}