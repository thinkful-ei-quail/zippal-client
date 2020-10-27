import React from 'react'
import ReactDOM from 'react-dom'
import ProfileForm from './ProfileForm'
import UserContext from '../../context/UserContext'

describe('ProfileForm Component', () => {
  it('renders without crashing', () => {
    const profileContext = {
      bio: 'Test Bio',
      location: 'USA',
      fa_icon: 'user-circle'
    }

    const div = document.createElement('div')
    ReactDOM.render(
      <UserContext.Provider value={{profileInfo: profileContext}}>
        <ProfileForm />
      </UserContext.Provider>, div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})