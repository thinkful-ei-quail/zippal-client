import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../../services/token-service.js'
import UserContext from '../../context/UserContext'
import quill from '../../images/quill.png'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink(){
    console.log(this.context.user)
    return (
      <div>
        <span>
          {this.context.user.display_name}
        </span>
        <nav className='nav'>
          <Link 
          onClick={this.handleLogoutClick} 
          to='/login'>
          Logout
          </Link>
          {' ' }
          <Link to='/profile'>Profile</Link>
        </nav>
          <span>        
            <h1 id="header_text">
            <Link to='/dashboard'>
              <img className='quill'  alt='zip pal' src={quill}/>
            </Link>
            </h1>
          </span>
      </div>
    )
  }

  renderLoginLink(){
    return (
      <div>
        <span>
          <h1 id="header_text">
            <Link to='/'>
              <img className='quill'  alt='zip pal' src={quill}/>
              Zip Pal
            </Link>
          </h1>
        </span>
      <nav className='nav'>
        <Link to='/login'>Login</Link>
        {' ' }
        <Link to='/registration'>Sign up</Link>
      </nav>
      </div>
    )
  }

  render() {
    return (
      <header>
        {TokenService.hasAuthToken()
        ? this.renderLogoutLink()
        : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header