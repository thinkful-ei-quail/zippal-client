import config from '../config'
import TokenService from './token-service'


const MessageApiService = {
  createNewMessage(conversation) {
    // use convoID, senderID, receiverID from conversation
    // redirect to message/new_message_id
    // set content to "Message in progress ..."
    return fetch(`${message_API_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        id: conversation.id,
        user_2: conversation.user_2
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },


  saveMessage(content, id) {
    // route patch message/:message_id/save 
    // updating message.content
    fetch(`${message_API_ENDPOINT}/${id}/save`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        content
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  sendMessage(content, id) {
    // route patch message/:message_id/send
    // updating content?, sender_status, receiver_status, date_sent
    // update conversation user_1_turn and user_2_turn
    fetch(`${message_API_ENDPOINT}/${id}/send`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        sender_status: 'Sent',
        receiver_status: 'Received',
        content,
        date_sent: new Date()
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  readMessage(message) {
    //route patch message/:message_id/read
    // updating sender_status, receiver_status, is_read
    fetch(`${message_API_ENDPOINT}/${message.id}/read`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        sender_status: 'Awaiting Reply',
        receiver_status: 'Read',
        is_read: true
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

};

const message_API_ENDPOINT = `${config.API_ENDPOINT}/api/message`;


export default MessageApiService