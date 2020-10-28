import React, {Component} from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import Loading from '../../components/Loading/Loading'

class RegistrationRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  static defaultProps = {
    history: {
      push:() => {},
    },
  }

  handleRegistrationSuccess = () => {
    const {history} = this.props
    history.push('/profile')
  }

  startLoading = () => {
    this.setState({
      loading: true
    })
  }

  render(){
    return (
      <section className='registration_section'>
        <h2>Sign up</h2>
        { this.state.loading === false ? <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
          startLoading={this.startLoading}
        /> : <Loading />}
      </section>
    );
  }
}

export default RegistrationRoute