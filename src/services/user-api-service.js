import config from '../config'
import TokenService from './token-service'

const UserApiService = {
  patchUser(user) {
    return fetch(`${config.API_ENDPOINT}/api/user`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res => (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json())
  }
}

export default UserApiService