import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
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
  it(`takes a snapshot of the findNewPal component`, () => {
    const user = {
      display_name: 'bob',
      bio: 'Test bio',
      location: 'Planet Earth',
      fa_icon: 'user-circle'
    }
    const tree = renderer
    .create(<FindNewPal user={user}/>)
    expect(tree).toMatchSnapshot();
  })
})
