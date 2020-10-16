import React,{Component} from 'react'

export default class Dashboard extends Component{
  render() {
    return (
      <section className='dashboard'>
        <section className='new_conversation'>
          <button>Start a new conversation</button>
        </section>
        <section className='Active_Conversations'>
          <p>new conversations go here</p>
          <ul>
            <li>conversation 1</li>
            <li>conversation 2</li>
            <li>conversation 3</li>
            <li>conversation 4</li>
            <li>conversation 5</li>
          </ul>
        </section>
      </section>
    )
  }
}