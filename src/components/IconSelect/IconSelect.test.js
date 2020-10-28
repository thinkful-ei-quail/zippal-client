import React from 'react'
import ReactDOM from 'react-dom'
import IconSelect from './IconSelect'
import renderer from 'react-test-renderer'

describe('IconSelect', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<IconSelect />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it(`takes snapshot of IconSelect componenet`, () => {
    const tree = renderer
    .create(<IconSelect/>)
    expect(tree).toMatchSnapshot()
  })
})