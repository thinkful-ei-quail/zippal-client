import React from 'react'
import ReactDOM from 'react-dom'
import NewConvoMessage from './NewConvoMessage'
import testHelpers from '../../services/test-helpers'
import renderer from 'react-test-renderer'

describe('NewConvoMessage Component', () => {
  it('renders without crashing', () => {
    const newConvo = testHelpers.makeNewConvo()
    const newMessage = testHelpers.makeTestMessages()[0] 
    const div = document.createElement('div')
    ReactDOM.render(<NewConvoMessage newConvoData={newConvo} newMessage={newMessage} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it(`takes a snapshot of the NewConvoMessage component`,()=>{
    const newConvo = testHelpers.makeNewConvo()
    const newMessage = testHelpers.makeTestMessages()[0]
    const tree = renderer
    .create(<NewConvoMessage newConvoData={newConvo} newMessage={newMessage} />)
    expect(tree).toMatchSnapshot()
  })
})