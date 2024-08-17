import axios from 'axios';

const TIMEOUT = 15000;

export const axiosInstance = axios.create({
  baseURL: 'https://duythduong-fpt-chat.hf.space/api/v1/vectorstore',
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
