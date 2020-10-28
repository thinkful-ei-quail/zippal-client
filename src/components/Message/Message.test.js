import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'
import testHelpers from '../../services/test-helpers'
import renderer from 'react-test-renderer'

describe('Message Component', () => {
  const convos = testHelpers.makeTestConvos()
  const convoData = convos[0]
  const messages = testHelpers.makeTestMessages()
  const message = messages[0]
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Message convoData={convoData} message={message} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it(`takes a snapshot of Message componenet`,()=> {
    const tree = renderer
    .create(<Message convoData={convoData} message={message}/>)
    expect(tree).toMatchSnapshot()
  })
})