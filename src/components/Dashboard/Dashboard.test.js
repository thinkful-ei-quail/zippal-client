import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './Dashboard'
import UserContext from '../../context/UserContext'
import renderer from 'react-test-renderer'

describe('Dashboard Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <UserContext.Provider value={{user: {id: 1, display_name: 'Bob'}}}>
        <Dashboard />
      </UserContext.Provider>, div
    )
    ReactDOM.unmountComponentAtNode(div)
  }),
  it(`takes a snapshot of dashboard`, () => {
    const tree = renderer
    .create(
      <UserContext.Provider value={{user: {id: 1, display_name:'Bob'}}}>
        <Dashboard />
      </UserContext.Provider>
    )
    expect(tree).toMatchSnapshot();
  })
})
