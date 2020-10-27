import React from 'react'
import ReactDOM from 'react-dom'
import testHelpers from '../../services/test-helpers'
import ConversationBubble from './ConversationBubble'
import UserContext from '../../context/UserContext'

describe('ConversationBubble Component', () => {
  const testConvos = testHelpers.makeTestConvos()
  const testConvo = testConvos[0]
  const testMessages = testHelpers.makeTestMessages()
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
    <UserContext.Provider value={{user: {id: 1}}}>
      <ConversationBubble convoData={testConvo} messageData={testMessages}/>
    </UserContext.Provider>
    , div)
    ReactDOM.unmountComponentAtNode(div)
  })
})