import React from 'react'
import ReactDOM from 'react-dom'
import DashboardRoute from './DashboardRoute'
import renderer from 'react-test-renderer'

describe('DashboardRoute Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DashboardRoute />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it(`takes a snapshot of the DashboardRoute component`,()=>{
    const tree = renderer
    .create(<DashboardRoute />)
    expect(tree).toMatchSnapshot()
  })
})