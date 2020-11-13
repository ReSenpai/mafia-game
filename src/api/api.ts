import axios from 'axios';
import chatMessagesData from './emulation_request/chat_data';
import { IChatMessage } from 'src/types';

axios.create({
  baseURL: 'https://mafia-game-backend-api.herokuapp.com/graphql',
});

export const chatAPI = {
  getChatMessages(): IChatMessage[] {
    return chatMessagesData;
  },
};
