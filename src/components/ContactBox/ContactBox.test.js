import React from 'react'
import ReactDOM from 'react-dom'
import testHelpers from '../../services/test-helpers'
import ContactBox from './ContactBox'
import UserContext from '../../context/UserContext'
import renderer from 'react-test-renderer'

describe.only('ContactBox Component', () => {
  

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <UserContext.Provider value={{user: {id: 1}}}>
        <ContactBox />
      </UserContext.Provider>, div
    )
    ReactDOM.unmountComponentAtNode(div)
  });
  it(`takes a snapshot of component`,() => {
    const tree = renderer
    .create(
      <UserContext.Provider value={{user:{id:1}}}>
        <ContactBox />
      </UserContext.Provider>
    )
    expect(tree).toMatchSnapshot();
  })
})