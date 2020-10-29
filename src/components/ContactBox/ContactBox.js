/* eslint-disable default-case */
import React, {Component} from 'react'
import {RyanDetails} from './ContactDetails'
import './ContactBox.css'

 export default class ContactBox extends Component {
  state = {
    johnToggled: false,
    philipToggled: false,
    MathewToggled: false,
    ryanToggled: false
  }

  toggleJohn = () => {
    this.setState({
      johnToggled: !this.state.johnToggled,
      philipToggled: false,
      MathewToggled: false,
      ryanToggled: false
    })
  }
  togglePhilip = () => {
    this.setState({
      johnToggled: false,
      philipToggled: !this.state.philipToggled,
      MathewToggled: false,
      ryanToggled: false
    })
  }
  toggleMathew = () => {
    this.setState({
      johnToggled: false,
      philipToggled: false,
      MathewToggled: !this.state.MathewToggled,
      ryanToggled: false
    })
  }
  toggleRyan = () => {
    this.setState({
      johnToggled: false,
      philipToggled: false,
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
        nameDetails = (
        <div>
          Hello John
        </div>
        )
        break
      case 'philipToggled':
        nameDetails = (
        <div>
          Hello Philip
        </div>
        )
        break
      case 'MathewToggled':
        nameDetails = (
        <div>
          Hello Mathew
        </div>
        )
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
      <button className="contact_card" onClick={this.togglePhilip}>
        <h3>Philip</h3>
      </button>
      <button className="contact_card" onClick={this.toggleMathew}>
        <h3>Mathew</h3>
      </button>
      <button className="contact_card" onClick={this.toggleRyan}>
        <h3>Ryan</h3>
      </button>
    </div>
    <div className="contact_details">
    {this.renderDetails()}
    </div>
    </>
     )
   }
 }