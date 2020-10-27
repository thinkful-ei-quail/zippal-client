import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './HomePage'
import renderer from 'react-test-renderer'

describe('HomePage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<HomePage />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it(`takes snapshot of HomePage component`,()=>{
    const tree = renderer
    .create(<HomePage/>)
    expect(tree).toMatchSnapshot()
  })
})