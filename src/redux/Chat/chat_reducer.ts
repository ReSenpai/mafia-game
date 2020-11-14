import { sleep } from './../../utils/helpers/timers/timers';
import { chatAPI } from '../../api/api';
import { IChatMessage } from '../../types';
import {
  ActionsTypes,
  IAddMessage,
  IInitialState,
  ISetChatMessages,
  ISetIsFetching,
  ThunkType,
} from './types';

export const SET_CHAT_MESSAGES = 'chat/SET_CHAT_MESSAGES';
export const SET_IS_FETCHING = 'chat/SET_IS_FETCHING';
export const ADD_MESSAGE = 'chat/ADD_MESSAGE';

const initialState: IInitialState = {
  chatMessages: [],
  isFetching: false,
};

const chatReducer = (
  state = initialState,
  action: ActionsTypes,
): IInitialState => {
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
            id: state.chatMessages.length + 2,
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

/**
 * Adds an array of chat messages to the store
 * @param chatMessages An array of chat messages
 */
export const setChatMessages = (
  chatMessages: Array<IChatMessage>,
): ISetChatMessages => ({
  type: SET_CHAT_MESSAGES,
  chatMessages,
});
/**
 * Download state
 */
export const setIsFetching = (isFetching: boolean): ISetIsFetching => ({
  type: SET_IS_FETCHING,
  isFetching,
});
/**
 * Add a new message to the overall array in the store
 */
export const addMessage = (message: string): IAddMessage => ({
  type: ADD_MESSAGE,
  message,
});

/**
 * Request an array of messages from the server (so far locally)
 * @param time Delay time
 */
export const getChatMessagesThunk = (
  time = 1000,
): ThunkType => async dispatch => {
  dispatch(setIsFetching(true));
  await sleep(time);
  const chatMessagesData = chatAPI.getChatMessages();
  dispatch(setChatMessages(chatMessagesData));
  dispatch(setIsFetching(false));
};

export default chatReducer;
