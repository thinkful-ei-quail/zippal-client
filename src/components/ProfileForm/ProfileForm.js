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
   const {location, bio, fa_icon} = this.context.profileInfo
    this.setState({
      location: location,
      bio: bio,
      fa_icon: fa_icon
    })
 }


  handlePatchUser = async (e) => {
    e.preventDefault()
    let {bio, location, fa_icon} = this.state
    await UserService.patchUser(bio, location, fa_icon)
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
    const {location, bio} = this.context.profileInfo

    return (
      <section className='ProfileForm'>
        <div>
          <h2>Edit your Profile</h2>
        </div>
        <form className='profileForm__form' onSubmit={this.handlePatchUser}>
          <label htmlFor='location'>
            <h4>Where are you located?:</h4>
          </label>
          <input 
            name='locationArea' 
            id='location' 
            type="text" 
            defaultValue={location? location : 'None Provided'} 
            onChange={(e) => this.handleChangeLocation(e)}
          />
          <IconSelect handleChangeIcon={this.handleChangeIcon}/>
          <label htmlFor='about'>
            <h4>Tell us about yourself:</h4>
          </label>
          <textarea 
            name="bioArea" 
            className='about' 
            id='about' 
            defaultValue={bio? bio : 'I\'m a mystery!'} 
            onChange={(e) => this.handleChangeBio(e)}
          />
          <div className='ProfileForm__button_box'>
            <button className='form_button' type="submit">{bio?'Update':'Submit'}</button>
            <button className='form_button' type="button" onClick={this.props.cancelUpdate}>{bio && location ? 'Back' : 'Skip for now' }</button>
          </div>
        </form>

      </section>

    )
  }
}