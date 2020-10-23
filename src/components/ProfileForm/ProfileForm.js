import React, {Component} from 'react'
import UserService from '../../services/user-api-service'
import UserContext from '../../context/UserContext'

import './ProfileForm.css'

export default class ProfileForm extends Component {
  state = {
    bioText: '',
    location: ''
  }
  static contextType = UserContext

  handlePatchUser = (e) => {
    e.preventDefault()
    UserService.patchUser(this.context.user, this.state.bioText, this.state.location)
    this.setState({
      bioText: '',
      location: ''
    })
  }

  handleChangeBio = (e) => {
    const {value} = e.target;
    this.setState({
      bioText: value
    })
  }

  handleChangeLocation = (e) => {
    const {value} = e.target;
    this.setState({
      location: value
    })
  }

  render(){
    return (
      <section className='profile_form'>
        <div>
          <h3>Profile</h3>
        </div>
        <legend>
        <form onSubmit={this.handlePatchUser}>
          <label>Country:</label>
          <input id='country' value={this.state.location} onChange={this.handleChangeLocation}></input>
          <hr/>
          <label>Tell us about yourself:</label>
          <textarea  className='about' id='about'  placeholder='write about yourself' value={this.state.bioText} onChange={this.handleChangeBio}>
          </textarea>
          <button type="submit">Submit</button>
        </form>
        </legend>
      </section>

    )
  }
}