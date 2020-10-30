import React, {Component} from 'react'
import ContactBox from '../../components/ContactBox/ContactBox'


export default class ContactPage extends Component {
  render(){
    return(
        <div className='contact'>
          <h2>Contact Us</h2>
          <br/>
          <h3>Team Zip Pal</h3>
          <ContactBox />
        </div>
    )
  }
}