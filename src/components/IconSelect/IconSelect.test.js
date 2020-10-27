import React from 'react'
import ReactDOM from 'react-dom'
import IconSelect from './IconSelect'

describe('IconSelect', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<IconSelect />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})