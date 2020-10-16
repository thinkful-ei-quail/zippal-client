import config from '../config'
import TokenService from './token-service'

// to pass through auth header use the getAuthToken
// to find user id or  we could use the parseJWT 
const ConversationApiService = {
    getConversations(user){
        // route - get conversation
        return fetch(`${config.API_ENDPOINT}/api/conversation`, {
            headers: {
                authorization: `bearer ${TokenService.getAuthToken()}`
            }
        }).then((res) => {
            return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        })
    },

    findNewPal(user){
        // route - get conversation/find
        // will have option to open conversation with found "newPal"
        // option to find another Pal ??
    },

    startNewConversation(newPal){
        // route - post conversation
        return fetch(`${config.API_ENDPOINT}/api/conversation`, {
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                user_2: newPal.user_2
            })
        }).then((res) => {
            return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        })
        // will create new conversation with "newPal"
        // will open/redirect to (open conversation) conversation/new_conversation_id 
    },

    openConversation(conversation_id){
        // route - get conversation/:conversationID
        // will open specific conversation relationship 
        // will have any past messages available
        // AND/OR will have the ability to create a new message
    },

    endConversation(conversation_id){
        // setting is_active to FALSE
    }
}

export default ConversationApiService