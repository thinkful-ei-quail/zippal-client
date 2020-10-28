import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RegistrationRoute from './RegistrationRoute'
import renderer from 'react-test-renderer'

describe('RegistrationRoute Component', () => {
  it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><RegistrationRoute /></BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
  })
  it(`takes a snapshot of the RegistrationRoute`,()=>{
    const tree = renderer
    .create(<BrowserRouter><RegistrationRoute /></BrowserRouter>)
    expect(tree).toMatchSnapshot()
  })
})