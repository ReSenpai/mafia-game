import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '..';
import { IChatMessage } from './../../types/index';

import {
  ADD_MESSAGE,
  SET_CHAT_MESSAGES,
  SET_IS_FETCHING,
} from './chat_reducer';

export interface ISetChatMessages {
  type: typeof SET_CHAT_MESSAGES;
  chatMessages: Array<IChatMessage>;
}
export interface ISetIsFetching {
  type: typeof SET_IS_FETCHING;
  isFetching: boolean;
}
export interface IAddMessage {
  type: typeof ADD_MESSAGE;
  message: string;
}

export type ActionsTypes = ISetChatMessages | ISetIsFetching | IAddMessage;
export type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;
