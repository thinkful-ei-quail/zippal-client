import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import UserContext from '../../context/UserContext' //Used to process logout
import Header from './Header'

describe('Header Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><Header /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})