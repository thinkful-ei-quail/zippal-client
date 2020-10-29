import React, {Component} from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import Loading from '../../components/Loading/Loading'


class LoginRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  toggleLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  }


  handleLoginSuccess = () => {
    const {location, history} = this.props
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }

  render() {
    return (
      <section className='LoginSection'>
        <h2>Login</h2>
        {this.state.loading && <Loading />}
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
          toggleLoading={this.toggleLoading}
        />
      </section>
    );
  }
}

export default LoginRoute