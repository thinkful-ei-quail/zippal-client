import config from '../config'
import TokenService from './token-service'

const ConversationApiService = {
  getConversations(user) {
    // route - get conversation
    return fetch(`${config.API_ENDPOINT}/api/conversation`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    })
  },

  findNewPal(conversationIds) {
    // route - get conversation/find
    return fetch(`${config.API_ENDPOINT}/api/conversation/find/${conversationIds}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    })
  },

  startNewConversation(newPal) {
    // route - post conversation
    return fetch(`${config.API_ENDPOINT}/api/conversation`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        user_2: newPal
      })
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    })
  },

  endConversation(conversation_id) {
    // setting is_active to FALSE
    return fetch(`${config.API_ENDPOINT}/api/conversation/${conversation_id}/deactivate`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        is_active: false
      }),
    })
      .then((res) => {
        return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      })
  }
}

export default ConversationApiService