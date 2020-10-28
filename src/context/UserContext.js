import React, {Component} from 'react'
import AuthApiService from '../services/auth-api-service'
import UserService from '../services/user-api-service'
import TokenService from '../services/token-service'
import IdleService from '../services/idle-service'

const UserContext = React.createContext({
  user:{},
  profileInfo:{},
  error:null,
  setError:() => { },
  clearError: () => { },
  setUser: () => { },
  getProfile: () => { },
  updateProfile: () => { },
  processLogin: () => { },
  processLogout: () => { },
})

export default UserContext

export class UserProvider extends Component {
  constructor(props){
    super(props)
    const state = {user: {}, error:null, profileInfo: {}}

    const jwtPayload = TokenService.parseAuthToken()
    

    if(jwtPayload){
      const profileData = this.getProfile()

      state.user = {
        id: jwtPayload.id,
        display_name: jwtPayload.display_name,
        username: jwtPayload.sub,
      }

      if(profileData)
        state.profileInfo = {
          bio: profileData.bio,
          display_name: profileData.display_name,
          fa_icon: profileData.fa_icon,
          location: profileData.location
      }
    }
      

    this.state = state;
    IdleService.setIdleCallback(this.logoutBecauseIdle)
  }

  componentDidMount(){
    if(TokenService.hasAuthToken()){
      IdleService.registerIdleTimerResets()
      TokenService.queueCallbackBeforeExpiry(() => {
        this.fetchRefreshToken()
      })
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallBackBeforeExpiry()
  }

  setError = error => {
    console.error(error)
    this.setState({error})
  }

  clearError = () => {
    this.setState({error: null})
  }
  
  setUser = user => {
    this.setState({user})
  }

  getProfile = async () => {
    const profileInfo = await UserService.getUserProfile()
    this.setState({profileInfo})
  }

  updateProfile = (profileInfo) => {
    this.setState({profileInfo})
  }

  processLogin = authToken => {
    TokenService.saveAuthToken(authToken)

    const jwtPayload = TokenService.parseAuthToken()
    this.setUser({
      id: jwtPayload.id,
      display_name: jwtPayload.display_name,
      username: jwtPayload.sub,
    })
    this.getProfile()
    IdleService.registerIdleTimerResets()
    TokenService.queueCallbackBeforeExpiry(() => {
      this.fetchRefreshToken()
    })
  }

  processLogout = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallBackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.setUser({})
    this.setState({profileInfo: {}})
  }

  logoutBecauseIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallBackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.setUser({idle:true})
  }

  fetchRefreshToken = () => {
    AuthApiService.refreshToken()
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        TokenService.queueCallbackBeforeExpiry(() => {
          this.fetchRefreshToken()
        })
      })
      .catch(err => {
        this.setError(err)
      })
  }

  render() {
    const value = {
      user: this.state.user,
      profileInfo: this.state.profileInfo,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      getProfile: this.getProfile,
      updateProfile: this.updateProfile,
      processLogin: this.processLogin,
      processLogout: this.processLogout
    }
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}