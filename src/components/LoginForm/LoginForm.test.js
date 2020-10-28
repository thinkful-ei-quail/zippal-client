import React from 'react'
import ReactDOM from 'react-dom'
import LoginForm from './LoginForm'
import renderer from 'react-test-renderer'

describe('LoginForm Component', () => {
  it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LoginForm />, div)
  ReactDOM.unmountComponentAtNode(div)
  })
  it(`takes snapshot of LoginForm component`,() => {
    const tree = renderer
    .create(<LoginForm />)
    expect(tree).toMatchSnapshot()
  })
})