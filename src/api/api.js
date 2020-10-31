// Тут будет обращение к апи

import axios from 'axios';

const instance = axios.create({
  baseURL: 'base-api-url',
});

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`).then(response => response.data);
  },
};
