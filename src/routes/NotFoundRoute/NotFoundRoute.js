import React, {Component} from 'react'
import Notfound from '../../images/Notfound.png' 

class NotFoundRoute extends Component {
  render(){
    return (
      <section className='notFound'>
        <h2>404 - Page not found</h2>
        <img alt='404 not found' src={Notfound}/>
      </section>
    );
  }
}

export default NotFoundRoute