import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'

describe('Footer Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it(`renders ConversationBubble component`, () => {
    const tree = renderer
  .create(
    <BrowserRouter>
      <Footer/>
    </BrowserRouter>
    )
expect(tree).toMatchSnapshot();
})
})
