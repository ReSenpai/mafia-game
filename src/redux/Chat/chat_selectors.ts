import { AppStateType } from '..';

export const getChatMessages = (state: AppStateType) => state.Chat.chatMessages;
