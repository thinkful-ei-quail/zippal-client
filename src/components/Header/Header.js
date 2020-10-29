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
        <div id="nav_logged_in">
          <div>
          <Link to='/profile'>Profile</Link>
          </div>
          <div>
            <Link 
            onClick={this.handleLogoutClick} 
            to='/login'>
            Logout
            </Link>
          </div>
        </div>
    )
  }

  renderLoginLink(){
    return (
      <div id="nav_no_token">
        <div>
          <Link to='/login'>Login</Link>
        </div>
        <div>
          <Link to='/register'>Sign-up</Link>
        </div>
      </div>
    )
  }

  render() {
    let aToken = TokenService.hasAuthToken();
    return (
      <>
      <div id='header_container'>
        <div className="header">
              <div className='header_image'>
                {aToken
                ? <Link className='header_link' to='/dashboard'><img className='quill' alt='zip pal' src={quill}/></Link>
                : <Link className='header_link' to='/'><img className='quill'  alt='zip pal' src={quill}/></Link> }
              </div>
              <div className='header_title'>
                <h1 >
                  <Link 
                    to={aToken ? '/dashboard' : '/'}
                  >
                    Zip Pal
                  </Link>
                </h1>
              </div>
            </div>
        <div className='nav_container'>
          <nav>
              {
                aToken
                ? this.renderLogoutLink()
                : this.renderLoginLink()
              }
          </nav>
        </div>
      </div>
      </>
    );
  }
}

export default Header