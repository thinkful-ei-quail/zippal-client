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

  startLoading = () => {
    this.setState({
      loading: true
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
        {this.state.loading === false ? <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
          startLoading={this.startLoading}
        /> : <Loading />}
      </section>
    );
  }
}

export default LoginRoute