import React, {Component} from 'react'
import ProfileForm from '../../components/ProfileForm/ProfileForm'


export default class Profile extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleUpdateProfileSuccess = () => {
    const {location, history} = this.props
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }


  render(){
    return (
      <section>
        <ProfileForm updateSuccess={this.handleUpdateProfileSuccess}/>
      </section>
    )
  }
}