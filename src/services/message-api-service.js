import config from '../config'
import TokenService from './token-service'



const MessageApiService = {
    createNewMessage(conversation) {
        // use convoID, senderID, receiverID from conversation
        // redirect to message/new_message_id
        // set content to "Message in progress ..."
    },

    openMessage(message) {
        // route get message/:message_id
        // options to save or send
    },

    saveMessage(message) {
        // route patch message/:message_id/save 
        // updating message.content
    },

    sendMessage(message) {
        // route patch message/:message_id/send
        // updating content?, sender_status, receiver_status, date_sent
        // update conversation user_1_turn and user_2_turn
    },

    readMessage(message){
        //route patch message/:message_id/read
        // updating sender_status, receiver_status, is_read
    }
}

export default MessageApiService