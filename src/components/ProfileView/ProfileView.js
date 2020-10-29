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
    this.props.cancelUpdate()
  }

  render() {
    return (
      <div className="profile">
      {(this.state.editProfile)
      ? <ProfileForm updateSuccess={this.props.updateSuccess} cancelUpdate={this.handleProfileEditCancel}/>
      : <ProfileCard editProfile={this.handleProfileEdit}/>
      }
      </div>
    )
  }
}