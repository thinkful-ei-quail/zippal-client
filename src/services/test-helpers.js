
const testHelpers = {
  makeTestConvos() {
    return [
      {
        id: 1,
        user_1: 1,
        user_2: 2,
        date_created: '2020-10-27T02:10:34.511Z',
        is_active: true,
        user_1_turn: true,
        user_2_turn: false,
        pal_name: 'Test User',
        fa_icon: 'user-circle'
      },
      {
        id: 2,
        user_1: 3,
        user_2: 1,
      },
      {
        id: 3,
        user_1: 4,
        user_2: 2,
        user_1_turn: false,
        user_2_turn: true
      },
      {
        id: 4,
        user_1: 3,
        user_2: 4,
      },
      {
        id: 5,
        user_1: 2,
        user_2: 3,
      },
    ]
  },

  makeTestMessages() {
    return [
      {
        id: 1,
        conversation_id: 1,
        sender_id: 1,
        sender_status: 'Pending',
        receiver_id: 2,
        receiver_status: 'Awaiting Message',
        content: 'Sup',
        is_read: false,
        date_sent: null
      },
    ]
  },

  makeNewConvo() {
    return {
      id: 1,
        user_1: 1,
        user_2: 2,
        date_created: '2020-10-27T02:10:34.511Z',
        is_active: true,
        user_1_turn: true,
        user_2_turn: false,
        pal_name: 'Test User',
        fa_icon: 'user-circle'
    }
  }
}

export default testHelpers