import React from 'react'
import ReactDOM from 'react-dom'
import NewConvoMessage from './NewConvoMessage'
import testHelpers from '../../services/test-helpers'

describe('NewConvoMessage Component', () => {
  it('renders without crashing', () => {
    const newConvo = testHelpers.makeNewConvo()
    const newMessage = testHelpers.makeTestMessages()[0] 
    const div = document.createElement('div')
    ReactDOM.render(<NewConvoMessage newConvoData={newConvo} newMessage={newMessage} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})