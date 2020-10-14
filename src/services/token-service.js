import jwtDecode from 'jwt-decode'
import config from '../config'

let _timeoutId
const _TEN_SECONDS_IN_MS = 10000

const TokenService = { 
  saveAuthToken(token){
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken:()=>{
    let token = window.localStorage.getItem(config.TOKEN_KEY);
    return token
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  parseJwt(jwt) {
    return jwtDecode(jwt)
  },
  parseAuthToken() {
    const authToken = tokenService.getAuthToken()
    if(authToken)
      return tokenService.parseJwt(authToken)
    else
      return undefined
  },
  _getMsUntilExpiry(payload){
    return payload.exp * 1000) - Date.now()
  },
  queueCallbackBeforeExpiry(callback){
    const msUntilExpiry = tokenService._getMsUntilExpiry(
      tokenService.parseAuthToken()
    )
    _timeoutId = setTimeout(callback, msUntilExpiry - _TEN_SECONDS_IN_MS)
  },
  clearCallBackBeforeExpiry(){
    clearTimeout(_timeoutId)
  },
}

export default TokenService