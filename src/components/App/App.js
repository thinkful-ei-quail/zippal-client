import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from '../Header/Header'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicRoute from '../PublicRoute/PublicRoute'
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute'
import LoginRoute from '../../routes/LoginRoute/LoginRoute'
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute'
import HomePage from '../../routes/HomePage/HomePage'
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute'
import Profile from '../../routes/ProfileRoute/ProfileRoute'
import AboutRoute from '../../routes/AboutRoute/AboutRoute'
import ContactRoute from '../../routes/ContactRoute/ContactRoute'
import PolicyRoute from '../../routes/PolicyRoute/PolicyRoute'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

//import individual icons here
import { 
  faUserCircle, 
  faEnvelope, 
  faEnvelopeOpen, 
  faEnvelopeOpenText, 
  faPaperPlane, 
  faPenNib, 
  faHourglassHalf,
  faTheaterMasks,
  faUniversity,
  faSnowboarding, 
  faPaw, 
  faPalette,
  faMountain,
  faMusic,
  faMotorcycle,
  faLaptopCode,
  faGamepad,
  faFutbol,
  faDumbbell,
  faDog, 
  faChess,
  faCat,
  faCaravan,
  faCameraRetro,
  faBowlingBall,
  faAnchor,
  faBiking,
  faPlaneDeparture,
  faWindowClose,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'
//add them to library here to be used wherever
import './App.css'
import Footer from '../Footer/Footer'


library.add(
  faUserCircle, 
  faEnvelope, 
  faEnvelopeOpen, 
  faEnvelopeOpenText, 
  faPaperPlane, 
  faPenNib, 
  faHourglassHalf,
  faTheaterMasks,
  faUniversity,
  faSnowboarding, 
  faPaw,
  faPalette,
  faMountain,
  faMusic,
  faMotorcycle,
  faLaptopCode,
  faGamepad,
  faFutbol,
  faDumbbell,
  faDog,
  faChess,
  faCat,
  faCaravan,
  faCameraRetro,
  faBowlingBall,
  faAnchor,
  faBiking,
  faPlaneDeparture,
  faWindowClose,
  faGithub,
  faLinkedin,
  faSpinner
)


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
          <Header />
        </header>
        <main className='App_main'>
          {this.state.hasError && <p className='red'>There was an error!</p>}
          <Switch>
            <Route
              exact path={'/'}
              component={HomePage}
            />
            <PrivateRoute
              path={'/profile'}
              component={Profile}
            />
            <PrivateRoute
              path={'/dashboard'}
              component={DashboardRoute}
            />
            <PublicRoute
              path={'/login'}
              component={LoginRoute}
            />
            <PublicRoute
              path={'/register'}
              component={RegistrationRoute}
            />
              <Route
                path={'/about'}
                component={AboutRoute}
              />
              <Route 
                path={'/contact'}
                component={ContactRoute}
              />
              <Route
                path={'/policy'}
                component={PolicyRoute}
              />
            <Route
              component={NotFoundRoute}
            />
          </Switch>
        </main>
        <footer className='App_footer'>
          <Footer/>
        </footer>
      </div>
    )
  }
}




export default App;
