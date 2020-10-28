import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../../public/GitHubIcon.png'
import './Footer.css'

class Footer extends Component {
    

    
    render() {
        return (
            <div className='Footer_Container'>
                <nav className='Footer_Nav_Container'>
                    <Link to='/'>Homepage</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Policy</Link>
                    <img src='public/GitHubIcon.png' alt='github link to repo'/>
                </nav>
            </div>
        )
    }
}

export default Footer