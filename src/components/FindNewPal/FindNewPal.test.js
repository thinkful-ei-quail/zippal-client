import React from 'react'
import ReactDOM from 'react-dom'
import FindNewPal from './FindNewPal'

describe('FindNewPal Component', () => {
  it('renders without crashing', () => {
    const user = {
      display_name: 'bob',
      bio: 'Test bio',
      location: 'Planet Earth',
      fa_icon: 'user-circle'
    }
    const div = document.createElement('div')
    ReactDOM.render(<FindNewPal user={user}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
