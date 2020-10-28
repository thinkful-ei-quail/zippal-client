import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Loading from './Loading'

describe('Loading Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Loading />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders the component correctly', () => {
    const tree = renderer 
      .create(<Loading />)
    expect(tree).toMatchSnapshot()
  })
})