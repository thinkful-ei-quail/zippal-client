import React from 'react'
import ReactDOM from 'react-dom'
import Dahsboard from './Dashboard'
import UserContext from '../../context/UserContext'

describe('Dashboard Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <UserContext.Provider value={{user: {id: 1, display_name: 'Bob'}}}>
        <Dahsboard />
      </UserContext.Provider>, div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
