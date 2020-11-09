import axios from 'axios';
import * as chatMessagesData from './emulation_request/chat_data.json';
import { IChatMessage } from 'src/types';

axios.create({
  baseURL: 'base-api-url',
});

export const chatAPI = {
  getChatMessages(): IChatMessage[] {
    return chatMessagesData;
  },
};
