/* eslint-disable default-case */
import React, {Component} from 'react'
import {JohnDetails, PhillipDetails, MathewDetails, RyanDetails} from './ContactDetails'
import './ContactBox.css'

 export default class ContactBox extends Component {
  state = {
    johnToggled: false,
    phillipToggled: false,
    MathewToggled: false,
    ryanToggled: false
  }

  toggleJohn = () => {
    this.setState({
      johnToggled: !this.state.johnToggled,
      phillipToggled: false,
      MathewToggled: false,
      ryanToggled: false
    })
  }
  togglePhillip = () => {
    this.setState({
      johnToggled: false,
      phillipToggled: !this.state.phillipToggled,
      MathewToggled: false,
      ryanToggled: false
    })
  }
  toggleMathew = () => {
    this.setState({
      johnToggled: false,
      phillipToggled: false,
      MathewToggled: !this.state.MathewToggled,
      ryanToggled: false
    })
  }
  toggleRyan = () => {
    this.setState({
      johnToggled: false,
      phillipToggled: false,
      MathewToggled: false,
      ryanToggled: !this.state.ryanToggled
    })
  }



  renderDetails = () =>{
    let nameToggled = ''
    let nameDetails = ''
    let obj = this.state

    for (const key of Object.keys(obj)){
      if(obj[key] === true){
        nameToggled = key
      }
    }

    switch(nameToggled) {
      case 'johnToggled':
        nameDetails = <JohnDetails />
        break
      case 'phillipToggled':
        nameDetails = <PhillipDetails />
        break
      case 'MathewToggled':
        nameDetails = <MathewDetails />
        break
      case 'ryanToggled':
        nameDetails = <RyanDetails />
        break
      default:
        break
    }
    return nameDetails;
  }
  
  render(){
    this.renderDetails()
     return (
       <>
      <div className="contact_card_box">
      <button className="contact_card" onClick={this.toggleJohn}>
        <h3>John</h3>
      </button>
      <button className="contact_card" onClick={this.togglePhillip}>
        <h3>Phillip</h3>
      </button>
      <button className="contact_card" onClick={this.toggleMathew}>
        <h3>Mathew</h3>
      </button>
      <button className="contact_card" onClick={this.toggleRyan}>
        <h3>Ryan</h3>
      </button>
    </div>
 
    {this.renderDetails()}
    
    </>
     )
   }
 }