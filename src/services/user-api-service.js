import config from '../config'
import TokenService from './token-service'

const UserApiService = {
<<<<<<< HEAD
  patchUser(bio, location){
=======
  getUserInfo(user) {
    return fetch(`${config.API_ENDPOINT}/api/user`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json())
  },

  patchUser(bio, location, fa_icon) {
   
    const updateFields = {
      bio,
      location,
      fa_icon
    }

>>>>>>> 9b09e2351e8b11c40fa702437605e378ff85ba5a
    return fetch(`${config.API_ENDPOINT}/api/user`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
<<<<<<< HEAD
      body: JSON.stringify({
        bio: bio,
        location: location
      }),
=======
      body:JSON.stringify(updateFields)
>>>>>>> 9b09e2351e8b11c40fa702437605e378ff85ba5a
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