import axios, { AxiosError } from 'axios';

import localStorageKeys from '../constants/localStorageKeys';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
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
      const currentUrl = window.location.pathname;
      if (currentUrl !== '/login') {
        window.location.replace('/login');
      }
    }
    return Promise.reject(error);
  },
);

export const apiHelper = axiosInstance;
