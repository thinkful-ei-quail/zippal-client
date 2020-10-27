import React from 'react'
import ReactDOM from 'react-dom'
import DashboardRoute from './DashboardRoute'

describe('DeshboardRoute Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DashboardRoute />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})