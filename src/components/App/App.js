import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from '../Header/Header'
//import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicRoute from '../PublicRoute/PublicRoute'
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute'
import LoginRoute from '../../routes/LoginRoute/LoginRoute'
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute'
import HomePage from '../HomePage/HomePage'

class App extends Component {
  state = {hasError: false}

  static getDerivedStateFromError(error){
    console.error(error)
    return {hasError:true}
  }

  render(){
    return (
      <div className='App'>
        <header className='App_header'>
          <Route component={Header}/>
        </header>
        <main className='App_main'>
          {this.state.hasError && <p className='red'>There was an error!</p>}
          <Switch>
            {/* <PrivateRoute
              path={}
              component={}
            /> */}
            <PublicRoute
              path={'/login'}
              component={LoginRoute}
            />
            <PublicRoute
              path={'/registration'}
              component={RegistrationRoute}
            />
            <PublicRoute
              path={'/'}
              component={HomePage}
            />
            <Route
              component={NotFoundRoute}
            />
          </Switch>
        </main>
      </div>
    )
  }
}




export default App;
