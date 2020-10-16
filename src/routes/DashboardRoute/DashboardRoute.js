import React, {Component} from 'react'
import ConversationService from '../../services/conversation-api-service'

export default class DashboardRoute extends Component {

  componentDidMount() {
    ConversationService.getConversations().then((conversations) => {
      console.log(conversations)
    })
  }

  handleNewPal = (e) => {
    console.log(e);
  }

  render(){
    return (
      <section>
        <div>
          <h2> welcome!</h2>
          <p>this is the dashboard</p>
          <button onClick={this.handleNewPal}>Find new Pal</button>
        </div>
      </section>

    )
  }
}