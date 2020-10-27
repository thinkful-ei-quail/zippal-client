import React from 'react'
import ReactDOM from 'react-dom'
import ProfileRoute from './ProfileRoute'

describe('ProfileRoute Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ProfileRoute />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})