import React from 'react'
import ReactDOM from 'react-dom'
import UserContext from '../../context/UserContext'
import ProfileCard from './ProfileCard'
import renderer from 'react-test-renderer'

describe('ProfileCard Component', () => {
  it('renders without crashing', () => {
    const profileContext = {
      fa_icon: 'user-circle',
      username: 'test_user',
      display_name: 'Bob',
      location: 'USA',
      bio: 'Test bio'
    }
    const div = document.createElement('div')
    ReactDOM.render(
      <UserContext.Provider value={{profileInfo: profileContext}}>
        <ProfileCard />
      </UserContext.Provider>, div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it(`takes a snapshot of the ProfileCard component`, () => {
    const profileContext = {
      fa_icon: 'user-circle',
      username: 'test_user',
      display_name: 'Bob',
      location: 'USA',
      bio: 'Test bio'
    }
    const tree = renderer
    .create(<UserContext.Provider value={{profileInfo: profileContext}}><ProfileCard/></UserContext.Provider>)
    expect(tree).toMatchSnapshot()
  })
})

//{fa_icon, username, display_name, location, bio} = this.context.profileInfo