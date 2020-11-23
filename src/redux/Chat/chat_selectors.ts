import { IChatMessage } from 'src/types';
import { AppStateType } from '..';

export const getChatMessages = (state: AppStateType): IChatMessage[] =>
  state.Chat.chatMessages;
