import config from '../config'
import TokenService from './token-service'

const UserApiService = {
  patchUser(bio, location){
    return fetch(`${config.API_ENDPOINT}/api/user`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        bio: bio,
        location: location
      }),
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json(res)
    )
  },

  getUserProfile(user) {
    return fetch(`${config.API_ENDPOINT}/api/user/profile`, {
      headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  })
  }
}

export default UserApiService