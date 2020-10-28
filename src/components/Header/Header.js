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
    return (
      <div className='logged_in'>
      <div className='nav_container'>
        <nav className='nav'>
          <Link 
          onClick={this.handleLogoutClick} 
          to='/login'>
          Logout
          </Link>
          {' ' }
          <Link to='/profile'>Profile</Link>
        </nav>
      </div>
      </div>
    )
  }

  renderLoginLink(){
    return (
      <div className='nav_container'>
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
      <>
         <div className="header_text">
            <div className='header_image'>
              {TokenService.hasAuthToken()
              ? <Link className='header_link' to='/dashboard'><img className='quill' alt='zip pal' src={quill}/></Link>
              : <Link className='header_link' to='/'><img className='quill'  alt='zip pal' src={quill}/></Link> }
            </div>
            <h1 className='title'>
              {TokenService.hasAuthToken()
              ?<Link to='/dashboard'>Zip Pal</Link>
              :<Link to='/'>Zip Pal</Link>}
            </h1>
          </div>
        {TokenService.hasAuthToken()
        ? this.renderLogoutLink()
        : this.renderLoginLink()}
      </>
    );
  }
}

export default Header