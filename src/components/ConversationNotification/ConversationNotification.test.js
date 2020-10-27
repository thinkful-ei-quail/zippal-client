import React from 'react'
import ReactDOM from 'react-dom'
import testHelpers from '../../services/test-helpers'
import ConversationNotification from './CoversationNotification'
import UserContext from '../../context/UserContext'
import renderer from 'react-test-renderer'

describe('ConversationNotification Component', () => {
  const testMessages = testHelpers.makeTestMessages()

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <UserContext.Provider value={{user: {id: 1}}}>
        <ConversationNotification messageData={testMessages}/>
      </UserContext.Provider>, div
    )
    ReactDOM.unmountComponentAtNode(div)
  });
  it(`takes a snapshot of component`,() => {
    const tree = renderer
    .create(
      <UserContext.Provider value={{user:{id:1}}}>
        <ConversationNotification messageData={testMessages}/>
      </UserContext.Provider>
    )
    expect(tree).toMatchSnapshot();
  })
})