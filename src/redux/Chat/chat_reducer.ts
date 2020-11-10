import { chatAPI } from '../../api/api';
import { IChatMessage } from '../../types';
import {
  ActionsTypes,
  IAddMessage,
  ISetChatMessages,
  ISetIsFetching,
  ThunkType,
} from './types';

export const SET_CHAT_MESSAGES = 'chat/SET_CHAT_MESSAGES';
export const SET_IS_FETCHING = 'chat/SET_IS_FETCHING';
export const ADD_MESSAGE = 'chat/ADD_MESSAGE';
// Более сокращенная и удобная типизация initial стэйта
const initialState = {
  chatMessages: [] as Array<IChatMessage>,
  isFetching: false as boolean,
};

type InitialStateType = typeof initialState;

const chatReducer = (
  state = initialState,
  action: ActionsTypes,
): InitialStateType => {
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

export const setChatMessages = (
  chatMessages: Array<IChatMessage>,
): ISetChatMessages => ({
  type: SET_CHAT_MESSAGES,
  chatMessages,
});
export const setIsFetching = (isFetching: boolean): ISetIsFetching => ({
  type: SET_IS_FETCHING,
  isFetching,
});
export const addMessage = (message: string): IAddMessage => ({
  type: ADD_MESSAGE,
  message,
});

// Thunks

export const getChatMessagesThunk = (
  time = 1000,
): ThunkType => async dispatch => {
  const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  dispatch(setIsFetching(true));
  await sleep(time);
  const chatMessagesData = chatAPI.getChatMessages();
  dispatch(setChatMessages(chatMessagesData));
  dispatch(setIsFetching(false));
};

export default chatReducer;
