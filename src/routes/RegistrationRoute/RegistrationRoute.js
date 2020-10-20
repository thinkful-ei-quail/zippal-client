import React, {Component} from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push:() => {},
    },
  }

  handleRegistrationSuccess = () => {
    const {history} = this.props
    history.push('/profile')
  }

  render(){
    return (
      <section className='registration_section'>
        <h2>Sign up</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default RegistrationRoute