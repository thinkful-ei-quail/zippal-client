import React from 'react'
import ReactDOM from 'react-dom'
import UserContext from '../../context/UserContext'
import ProfileView from './ProfileView'

describe('ProfileView Component', () => {
  it('renders without crashing', () => {
    const profileContext = {
      fa_icon: 'user-circle',
      bio: 'Test Bio'
    }

    const div = document.createElement('div')
    ReactDOM.render(
      <UserContext.Provider value={{profileInfo: profileContext}}>
        <ProfileView />
      </UserContext.Provider>, div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})