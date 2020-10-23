import React, {Component} from 'react'
import UserService from '../../services/user-api-service'
import UserContext from '../../context/UserContext'
import IconSelect from '../../components/IconSelect/IconSelect'

import './ProfileForm.css'

export default class ProfileForm extends Component {
  state = {
    bioText: '',
    location: '', 
    fa_icon: 'user-circle'
  }
  static contextType = UserContext

  handlePatchUser = (e) => {
    e.preventDefault()
    UserService.patchUser(this.state.bioText, this.state.location, this.state.fa_icon)
    this.setState({
      bioText: '',
      location: ''
    })
    this.props.handleUpdateProfile()
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
  handleChangeIcon= (e) => {
    const {value} = e.target;
    this.setState({
      fa_icon: value
    })
  }

  render(){
    return (
      <section className='ProfileForm'>
        <div>
          <h3>Edit your Profile</h3>
        </div>
       
        <form onSubmit={this.handlePatchUser}>
          {/* <label>Icon</label>
          <input id='fa_icon' value={this.state.fa_icon} onChange={this.handleChangeIcon}/> */}
          <IconSelect />
          <label>Country:</label>
          <input id='country' value={this.state.location} onChange={this.handleChangeLocation}></input>
          <hr/>
         
          <div className='ProfileForm__about'>
            <label>Tell us about yourself:</label>
            <textarea className='ProfileForm__about_textarea'  placeholder='write about yourself' value={this.state.bioText} onChange={this.handleChangeBio}>
            </textarea>
          </div>
          <button type="submit">Submit</button>
        </form>

      </section>

    )
  }
}