import { chatAPI } from 'src/api/api';

const SET_CHAT_MESSAGES = 'chat/SET_CHAT_MESSAGES';
const SET_IS_FETCHING = 'chat/SET_IS_FETCHING';
const ADD_MESSAGE = 'chat/ADD_MESSAGE';

let initialState = {
  chatMessages: [],
  isFetching: false,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHAT_MESSAGES: {
      return {
        ...state,
        chatMessages: [...state.chatMessages, ...action.chatMessages],
      };
    }
    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        chatMessages: [
          ...state.chatMessages,
          {
            id: state.chatMessages.length + 1,
            avatar:
              'https://www.myinstants.com/media/instants_images/van-darkholme.jpg.pagespeed.ce.vKDHBPAGKh.jpg',
            name: 'Van',
            text: action.message,
            likes: 0,
            dislikes: 0,
            messageTime: '06 Ноября 17:38',
          },
        ],
      };
    }
    default:
      return state;
  }
};

// Actions

export const setChatMessages = chatMessages => ({
  type: SET_CHAT_MESSAGES,
  chatMessages,
});
export const setIsFetching = isFetching => ({
  type: SET_IS_FETCHING,
  isFetching,
});
export const addMessage = message => ({ type: ADD_MESSAGE, message });

// Thunks

export const getChatMessagesThunk = (time = 1000) => async dispatch => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  dispatch(setIsFetching(true));
  await sleep(time);
  const chatMessagesData = chatAPI.getChatMessages();
  dispatch(setChatMessages(chatMessagesData));
  dispatch(setIsFetching(false));
};

export default chatReducer;
