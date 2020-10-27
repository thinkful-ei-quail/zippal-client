import React from 'react'
import ReactDOM from 'react-dom'
import LoginRoute from './LoginRoute'
//import LoginForm from '../../components/LoginForm/LoginForm'
import renderer from 'react-test-renderer'

describe('LoginRoute Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LoginRoute />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it(`takes snapshot of LoginRoute Component`,()=>{
    const tree = renderer
    .create(<LoginRoute/>)
    expect(tree).toMatchSnapshot()

  })
})