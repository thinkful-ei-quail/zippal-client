import React from 'react'
import ReactDOM from 'react-dom'
import ContactRoute from './ContactRoute'
import renderer from 'react-test-renderer'

describe.only('ContactRoute Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ContactRoute />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it(`takes snapshot of ContactRoute component`,()=>{
    const tree = renderer
    .create(<ContactRoute/>)
    expect(tree).toMatchSnapshot()
  })
})