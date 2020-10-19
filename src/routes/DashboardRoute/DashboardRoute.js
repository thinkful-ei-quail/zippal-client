import React, {Component} from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'


export default class DashboardRoute extends Component {

  
  render(){
    return (
      <section>
        <div>
          <h2> welcome!</h2>
          <Dashboard/>
        </div>
      </section>

    )
  }
}