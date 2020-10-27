import React, {Component} from 'react'
import UserService from '../../services/user-api-service'
import './ProfileForm.css'
import IconSelect from '../../components/IconSelect/IconSelect'
import UserContext from '../../context/UserContext'


export default class ProfileForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      bio: '',
      location: '',
      fa_icon: ''
    }
  }


 static contextType = UserContext

  componentDidMount() {
    // this.context.getProfile() <= unnecessary?
    this.setState({
      location: this.context.profileInfo.location,
      bio: this.context.profileInfo.bio,
      fa_icon: this.context.profileInfo.fa_icon
    })
 }


  handlePatchUser = async (e) => {
    e.preventDefault()
    
    let profileInfo = {
      bio: this.state.bio,
      location: this.state.location,
      fa_icon: this.state.fa_icon
    }
    UserService.patchUser(this.state.bio, this.state.location, this.state.fa_icon)
    this.context.updateProfile(profileInfo)
    this.setState({
      bio: '',
      location: ''
    })
    this.props.updateSuccess();
  }

  handleChangeBio = (e) => {
    const {value} = e.target;
    this.setState({
      bio: value
    })
  }

  handleChangeLocation = (e) => {
    const {value} = e.target;
    this.setState({
      location: value
    })
  }
  handleChangeIcon= (icon) => {
    this.setState({
      fa_icon: icon
    })
  }

  render(){
    return (
      <section className='ProfileForm'>
        <div>
          <h2>Edit your Profile</h2>
        </div>
       
        <form className='profileForm__form' onSubmit={this.handlePatchUser}>
          <label htmlFor='location'><h4>Where are you located?:</h4></label>
          <input name='locationArea' id='location' type="text" defaultValue={this.state.location} onChange={(e) => this.handleChangeLocation(e)}></input>

          <IconSelect handleChangeIcon={this.handleChangeIcon}/>
       

          <label htmlFor='about'><h4>Tell us about yourself:</h4></label>
          <textarea name="bioArea" className='about' id='about' placeholder={this.state.bio} defaultValue={this.state.bio} onChange={(e) => this.handleChangeBio(e)}>
          </textarea>

          <div className='ProfileForm__button_box'>
            <button type="submit">Submit</button>
            <button type="button" onClick={this.props.cancelUpdate}>Cancel</button>
          </div>
        </form>

      </section>

    )
  }
}