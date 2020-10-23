import React, {Component} from 'react'
import UserService from '../../services/user-api-service'
import './ProfileForm.css'
import UserContext from '../../context/UserContext'

export default class ProfileForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      bioText: '',
      location: '',
      fa_icon: ''
    }
  }

 static contextType = UserContext

  handlePatchUser = async (e) => {
    e.preventDefault()
    UserService.patchUser(this.state.bioText, this.state.location, this.state.fa_icon)
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
    const {bio, location, fa_icon, display_name} = this.context.profileInfo
    return (
      <section className='profile_form'>
        <div>
          <h3>{`${display_name}'s Profile`}</h3>
        </div>
        <legend>
        <form onSubmit={this.handlePatchUser}>
          <label htmlFor='location'>Location:</label>
          <input name='locationArea' id='location' placeholder={location} value={this.state.location} onChange={this.handleChangeLocation}></input>
          <label htmlFor='fa_icon'>Icon</label>
          <input name='UserIcon' id='fa_icon' defaultValue={fa_icon}  value={this.state.fa_icon} onChange={this.handleChangeIcon}/>
          <hr/>
          <label htmlFor='about'>Tell us about yourself:</label>
          <textarea name="bioArea" className='about' id='about' placeholder={bio} value={this.state.bioText} onChange={this.handleChangeBio}>
          </textarea>
          <button type="submit">Submit</button>
        </form>
        </legend>
      </section>

    )
  }
}