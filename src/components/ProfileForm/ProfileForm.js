import React, {Component} from 'react'
import UserService from '../../services/user-api-service'
import './ProfileForm.css'

export default class ProfileForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      bioText: '',
      location: ''
    }
  }

  

  async componentDidMount() {
    const userInfo = await UserService.getUserProfile()
    this.setState({
      bioText: userInfo.bio,
      location: userInfo.location
    })
  }

  handlePatchUser = (e) => {
    e.preventDefault()
    UserService.patchUser(this.state.bioText, this.state.location)
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
        <form onSubmit={this.handlePatchUser}>
          <label htmlFor='location'>Location:</label>
          <input name='locationArea' id='location' value={this.state.location} onChange={this.handleChangeLocation}></input>
          <hr/>
          <label htmlFor='about'>Tell us about yourself:</label>
          <textarea name="bioArea" className='about' id='about'  value={this.state.bioText} onChange={this.handleChangeBio}>
          </textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

    )
  }
}