import { IAction } from '../../types';
import { chatAPI } from '../../api/api';
import { IChatMessage } from '../../types';

const SET_CHAT_MESSAGES = 'chat/SET_CHAT_MESSAGES';
const SET_IS_FETCHING = 'chat/SET_IS_FETCHING';
const ADD_MESSAGE = 'chat/ADD_MESSAGE';

interface IInitialState {
  chatMessages: [];
  isFetching: boolean;
}

const initialState: IInitialState = {
  chatMessages: [],
  isFetching: false,
};

const chatReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_CHAT_MESSAGES: {
      return {
        ...state,
        chatMessages: [...state.chatMessages, ...action.payload.chatMessages],
      };
    }
    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload.isFetching,
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
            text: action.payload.message,
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

export const setChatMessages = (chatMessages: IChatMessage[]): IAction => ({
  type: SET_CHAT_MESSAGES,
  payload: {
    chatMessages,
  },
});
export const setIsFetching = (isFetching: boolean): IAction => ({
  type: SET_IS_FETCHING,
  payload: {
    isFetching,
  },
});
export const addMessage = (message: string): IAction => ({
  type: ADD_MESSAGE,
  payload: { message },
});

// Thunks

export const getChatMessagesThunk = (time = 1000) => async (
  dispatch: any,
): Promise<void> => {
  const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  dispatch(setIsFetching(true));
  await sleep(time);
  const chatMessagesData = chatAPI.getChatMessages();
  dispatch(setChatMessages(chatMessagesData));
  dispatch(setIsFetching(false));
};

export default chatReducer;
