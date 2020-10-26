import React, {Component} from 'react'
import UserService from '../../services/user-api-service'
import './ProfileForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconSelect from '../../components/IconSelect/IconSelect'
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

 async componentDidMount() {
   await this.context.getProfile()
   console.log(this.context)
 }


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
    console.log(fa_icon)
    return (
      <section className='ProfileForm'>
        <div>
          <h3>Edit your Profile</h3>
        </div>
       
        <form onSubmit={this.handlePatchUser}>
          <label htmlFor='location'>Location:</label>
          <input name='locationArea' id='location' placeholder={location} value={this.state.location} onChange={this.handleChangeLocation}></input>
          {/* <button type="button">
            {<FontAwesomeIcon icon={fa_icon? fa_icon : 'user-circle'}/>}
          </button> */}
          <IconSelect />
          <hr/>
          <label htmlFor='about'>Tell us about yourself:</label>
          <textarea name="bioArea" className='about' id='about' placeholder={bio} value={this.state.bioText} onChange={this.handleChangeBio}>
          </textarea>
          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={this.props.cancelUpdate}>Cancel</button>
          </div>
        </form>

      </section>

    )
  }
}