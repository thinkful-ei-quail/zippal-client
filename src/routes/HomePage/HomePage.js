import React, {Component} from 'react'

import './HomePage.css'

export default class HomePage extends Component {
  render(){
    return(
        <div className='welcome'>
          <h2>Welcome to Zip Pal!</h2>
          <br/>
          <h3>what is Zip Pal?</h3>
          <p>Zip Pal was created out of that familiar human need for connections.</p> 
          <p>In these troubled times, it is so hard to just meet people.</p>
          <p>That is where Zip Pal comes in! With Zip Pal, you can start a conversation with another random user anytime you'd like! </p>
        </div>
    )
  }
}