import React from 'react'
import ReactDOM from 'react-dom'
import testHelpers from '../../services/test-helpers'
import ConversationBubble from './ConversationBubble'

describe('ConversationBubble Component', () => {
  const testConvos = testHelpers.makeTestConvos()
  const testConvo = testConvos[0]
  const testMessages = testHelpers.makeTestMessages()
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ConversationBubble convoData={testConvo} messageData={testMessages}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})