import React from 'react'
import ReactDOM from 'react-dom'
import LoginRoute from './LoginRoute'
import LoginForm from '../../components/LoginForm/LoginForm'

describe('LoginRoute Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LoginForm />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})