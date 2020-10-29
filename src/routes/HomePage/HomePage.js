import React, {Component} from 'react'

import './HomePage.css'

export default class HomePage extends Component {
  render(){
    return(
      <>
        <div className='welcome'>
          <h2>Welcome to Zip Pal!</h2>
          <div className='about_zippal'>
            <br/>
            <h3>what is Zip Pal?</h3>
            <p>Zip Pal was created out of that familiar human need for connections.
            In these troubled times, it is so hard to just meet people.
            That is where Zip Pal comes in! With Zip Pal, you can start a conversation with another random user anytime you'd like! </p>
            <hr/>
            <h3>How does it work?</h3>
            <p>When you login, you'll be greeted with your dashboard. For first time users this dashboard will have 5 "find new pal"
            buttons. When you click on one of these buttons you'll see a new section that will show you another user's name and their
            information. When you send a message to another user, there will be a delay before that person gets your message, just like
             real mail. The person will see an incoming message, and will be able to reply to your message after 6 hours. </p>
            <hr/>
            <p>Please note, each user is restricted to a max of 5 conversations at any given time. Once all of your new pal slots
            are filled, you can not start a conversation with another user until you've ended a previous conversation.</p>
          </div>
        </div>
      </>
    )
  }
}