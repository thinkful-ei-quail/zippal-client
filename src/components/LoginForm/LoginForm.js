import React, {Component} from 'react'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../context/UserContext'

import './LoginForm.css'

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  static contextType = UserContext

  state = {error: null}

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.toggleLoading()
    const {username, password} = ev.target

    this.setState({error:null})

    AuthApiService.postLogin({
      username:username.value,
      password:password.value,
    })
    .then(res => {
      username.value = ''
      password.value = ''
      this.context.processLogin(res.authToken)
      this.props.toggleLoading()
      this.props.onLoginSuccess()
    })
    .catch(res => {
      this.setState({ error: res.error})
      this.props.toggleLoading()
    })
  }

  render(){
    const { error } = this.state
    return (
      <form
        className='user_form'
        onSubmit={this.handleSubmit}
      >
       <legend>
        <div role='alert'>
          {error && <p className='error'>{error}</p>}
        </div>
        <label htmlFor='login-username-input'>
          Username
        </label>
        <input
          // ref={this.firstInput}
          id='login-username-input'
          name='username'
          required
        />
        <div>
          <label htmlFor='login-password-input'>
            Password
          </label>
          <input
            id='login-password-input'
            name='password'
            type='password'
            required
          />
        </div>
        <button className='form_button' type='submit'>
          Login
        </button>
        </legend>
      </form>
    )
  }
}

export default LoginForm