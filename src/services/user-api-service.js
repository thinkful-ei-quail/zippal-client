import config from '../config'
import TokenService from './token-service'

const UserApiService = {
  patchUser(user, bio, location) {
    user.bio = bio
    user.location = location

    return fetch(`${config.API_ENDPOINT}/api/user`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body:JSON.stringify(user)
    })
    .then(res => (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json())
  }
}

export default UserApiService