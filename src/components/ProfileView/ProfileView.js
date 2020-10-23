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

  handleProfileEdit = (e) => {
    e.preventDefault()
    this.setState({editProfile: true})
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
      ? <ProfileForm updateSuccess={this.props.updateSuccess}/>
      : <ProfileCard editProfile={this.handleProfileEdit}/>
      }
      </div>
    )
  }
}