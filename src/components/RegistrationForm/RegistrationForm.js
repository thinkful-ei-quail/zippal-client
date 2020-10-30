import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../context/UserContext';
import Required from '../Required/Required'
import './RegistrationForm.css'


class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = {error:null}

  static contextType = UserContext

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.toggleLoading()
    const {name,username,password} = ev.target
    AuthApiService.postUser({
      display_name: name.value,
      username: username.value,
      password: password.value,
    })
    .then(() => {
      AuthApiService.postLogin({
        username: username.value,
        password: password.value
      }).then((res) => {
        this.context.processLogin(res.authToken);
      }).then(user => {
        name.value = ''
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
    })
    .catch(res => {
      this.setState({error: res.error})
      this.props.toggleLoading()
    })
  }

  render(){
    const {error} = this.state
    return (
      <form
      className='user_form'
        onSubmit={this.handleSubmit}
      >
        <legend>
        <div role='alert'>
          {error && <p className='error'>{error}</p>}
        </div>
        <p className='RegistrationForm__required_text'><Required /> indicates required field</p>
        <div>
          <label htmlFor='registration-name-input'>
            Display Name<Required />
          </label>
          <input
            id='registraion-name-input'
            name='name'
            required
          />
        </div>
        <div>
          <label htmlFor='registration-username-input'>
            Username<Required />
          </label>
          <input
            id='registration-username-input'
            name='username'
            required
          />
        </div>
        <div>
          <label htmlFor='registration-password-input'>
            Password<Required />
          </label>
          <input
            id='registration-password-input'
            name='password'
            type='password'
            required
          />
        </div>
        <div>
          <button className='form_button' type='submit'>
            Sign up
          </button>
          {' '}
          <Link className='RegistrationForm__link' to='/login'>Already have an account?</Link>
        </div>
        </legend>
      </form>
    )
  }
}

export default RegistrationForm