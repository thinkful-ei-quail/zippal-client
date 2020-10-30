import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

class Footer extends Component {
    

    
    render() {
        return (
            <div className='Footer_Container'>
                <nav className='Footer_Nav_Container'>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/policy'>Policy</Link>
                    <a href='https://github.com/thinkful-ei-quail/zippal-client' target='_blank' rel='external noopener noreferrer' alt='link to client github repo'><FontAwesomeIcon icon={['fab','github']} />GitHub</a>
                </nav>
            </div>
        )
    }
}

export default Footer