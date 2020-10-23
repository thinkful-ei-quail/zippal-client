import React, {Component} from 'react'
import UserService from '../../services/user-api-service'
import './ProfileForm.css'
import UserContext from '../../context/UserContext'

export default class ProfileForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      bioText: '',
      location: ''
    }
  }

 static contextType = UserContext

  handlePatchUser = async (e) => {
    e.preventDefault()
    await UserService.patchUser(this.state.bioText, this.state.location)
    this.setState({
      bioText: '',
      location: ''
    })
    this.props.updateSuccess();
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
    const {bio, location} = this.context.profileInfo
    return (
      <section className='profile_form'>
        <div>
          <h3>Profile</h3>
        </div>
        <form onSubmit={this.handlePatchUser}>
          <label htmlFor='location'>Location:</label>
          <input name='locationArea' id='location' placeholder={location} value={this.state.location} onChange={this.handleChangeLocation}></input>
          <hr/>
          <label htmlFor='about'>Tell us about yourself:</label>
          <textarea name="bioArea" className='about' id='about' placeholder={bio} value={this.state.bioText} onChange={this.handleChangeBio}>
          </textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

    )
  }
}