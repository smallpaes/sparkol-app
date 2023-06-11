import axios, { AxiosError } from 'axios';

import localStorageKeys from '../constants/localStorageKeys';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3333',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem(localStorageKeys.TOKEN);
      localStorage.removeItem(localStorageKeys.USER);
    }
    return Promise.reject(error);
  },
);

export const apiHelper = axiosInstance;
