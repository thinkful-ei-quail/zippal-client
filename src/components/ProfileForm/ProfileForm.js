import React, {Component} from 'react'
import './ProfileForm.css'

export default class ProfileForm extends Component {
  render(){
    return (
      <section className='profile'>
        <div>
          <h3>Profile</h3>
        </div>
        <form htmlFor='about'>
          <label>Tell us about yourself:</label>
          <textarea id='about'  placeholder='write a little about yourself...'>
          </textarea>
          {' ' }
          <label>Country:</label>
          <input id='country' placeholder='where are you from?'></input>
          <button>Submit</button>
        </form>
      </section>

    )
  }
}