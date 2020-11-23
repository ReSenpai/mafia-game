// Тут будет обращение к апи

import axios from 'axios';
import store from '../redux/store';
import * as chatMessagesData from './emulation_request/chat_data.json';

axios.create({
  baseURL: 'base-api-url',
});

export const chatAPI = {
  getChatMessages() {
    return chatMessagesData.default;
  },
};

// ./utils/auth.js
export const setupInterceptors = () => {
  axios.interceptors.request.use(
    config => {
      // eslint-disable-next-line
      config.headers = {
        ...config.headers,
        Authentification: 'Bearer ' + store.getState()['Auth']['token'],
      };

      return config;
    },
    error => Promise.reject(error),
  );
};

setupInterceptors();
