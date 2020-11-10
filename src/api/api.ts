import axios from 'axios';
import chatMessagesData from './emulation_request/chat_data';
import { IChatMessage } from 'src/types';

axios.create({
  baseURL: 'base-api-url',
});

export const chatAPI = {
  getChatMessages(): IChatMessage[] {
    return chatMessagesData;
  },
};
