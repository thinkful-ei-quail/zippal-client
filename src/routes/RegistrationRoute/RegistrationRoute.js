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

  toggleLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  }

  render(){
    return (
      <section className='registration_section'>
        <h2>Sign up</h2>
        { this.state.loading === false ? <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
          toggleLoading={this.toggleLoading}
        /> : <Loading />}
      </section>
    );
  }
}

export default RegistrationRoute