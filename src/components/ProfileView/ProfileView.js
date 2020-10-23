import React, {Component} from 'react'
import UserContext from '../../context/UserContext'
import UserService from '../../services/user-api-service'
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

export default class Profile extends Component {
  state = {
    userProfile: {},
    dataLoaded: false
  }

  static contextType = UserContext

  async componentDidMount() {
    console.log(this.context.user.id)
    let [userProfile] = await UserService.getUserInfo(this.context.user.id)
    console.log(userProfile)
    this.setState({
      userProfile,
      dataLoaded: true
    })
}

handleUpdateProfile = async () => {
 const [updatedProfile] = await UserService.getUserInfo(this.context.user.id);
 console.log(updatedProfile)
 this.setState({
   userProfile: updatedProfile
 })
}

  renderProfileCard = () => {
    return (
      <ProfileCard userProfile={this.state.userProfile}/>
    )
  }

  render() {
    return (
      <div className="profile">
      {this.state.dataLoaded ? this.renderProfileCard() : ''}
      <ProfileForm handleUpdateProfile={this.handleUpdateProfile}/>
      </div>
    )
  }
}