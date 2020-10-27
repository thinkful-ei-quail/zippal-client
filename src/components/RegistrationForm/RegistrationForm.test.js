import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RegistrationForm from './RegistrationForm'
import renderer from 'react-test-renderer'

describe('RegistrationForm Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <RegistrationForm />
      </BrowserRouter>, div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it(`takes a snapshot of the RegistrationForm Component`,()=>{
    const tree = renderer
    .create(<BrowserRouter><RegistrationForm/></BrowserRouter>)
    expect(tree).toMatchSnapshot()
  })
})