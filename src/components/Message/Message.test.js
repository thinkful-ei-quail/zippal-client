import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'
import testHelpers from '../../services/test-helpers'

describe('Message Component', () => {
  const convos = testHelpers.makeTestConvos()
  const convoData = convos[0]
  const messages = testHelpers.makeTestMessages()
  const message = messages[0]
  it('renders without crashing', () => {
    const user = {}
    const div = document.createElement('div')
    ReactDOM.render(<Message convoData={convoData} message={message} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})