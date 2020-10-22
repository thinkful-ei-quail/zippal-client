import React, {Component} from 'react'
import ProfileView from '../../components/ProfileView/ProfileView'


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
<<<<<<< HEAD
      <section>
        <ProfileForm updateSuccess={this.handleUpdateProfileSuccess}/>
      </section>
=======
        <ProfileView />
>>>>>>> 9b09e2351e8b11c40fa702437605e378ff85ba5a
    )
  }
}