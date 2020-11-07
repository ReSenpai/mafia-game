// Тут будет обращение к апи

import axios from 'axios';
import * as chatMessagesData from './emulation_request/chat_data.json';

const instance = axios.create({
  baseURL: 'base-api-url',
});

export const chatAPI = {
  getChatMessages() {
    return chatMessagesData.default;
  },
};
