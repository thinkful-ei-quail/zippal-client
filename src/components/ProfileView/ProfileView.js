import React, {Component} from 'react'
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import ProfileCard from '../ProfileCard/ProfileCard'
import UserContext from '../../context/UserContext'

export default class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      editProfile: false
    }
  }

  static contextType = UserContext

  handleProfileEdit = (e) => {
    e.preventDefault()
    this.setState({editProfile: true})
  }

  handleProfileEditCancel = () => {
    this.setState({editProfile: false})
  }

  render() {
    const {bio, fa_icon} = this.context.profileInfo
    console.log(fa_icon)
    return (
      <div className="profile">
      {/* <section>
        <p>{fa_icon}</p>
        <p>Username: {username}</p>
        <p>display name: {display_name}</p>
        <p>location: {location}</p>
        <p>bio: {bio}</p>
      </section> */}
      {(this.state.editProfile || !bio)
      ? <ProfileForm updateSuccess={this.props.updateSuccess} cancelUpdate={this.handleProfileEditCancel}/>
      : <ProfileCard editProfile={this.handleProfileEdit}/>
      }
      </div>
    )
  }
}