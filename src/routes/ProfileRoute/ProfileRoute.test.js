import React from 'react'
import ReactDOM from 'react-dom'
import ProfileRoute from './ProfileRoute'
import renderer from 'react-test-renderer'

describe('ProfileRoute Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ProfileRoute />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it(`takes snapshot of ProfileRoute Component`,()=>{
    const tree = renderer
    .create(<ProfileRoute/>)
    expect(tree).toMatchSnapshot()
  })
})