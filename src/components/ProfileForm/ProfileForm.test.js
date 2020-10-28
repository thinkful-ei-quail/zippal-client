import React from 'react'
import ReactDOM from 'react-dom'
import ProfileForm from './ProfileForm'
import UserContext from '../../context/UserContext'
import renderer from 'react-test-renderer'

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
  it(`takes a snapshot of ProfileForm Component`, () => {
    const profileContext = {
      bio: 'Test Bio',
      location: 'USA',
      fa_icon: 'user-circle'
    }
    const tree = renderer
    .create(<UserContext.Provider value={{profileInfo: profileContext}}><ProfileForm /></UserContext.Provider>)
    expect(tree).toMatchSnapshot()
  })
})