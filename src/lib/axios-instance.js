import axios from 'axios';
import {
  AUTH_TOKEN_KEY,
  getStorageItem,
  removeStorageItem,
  setStorageItem,
} from './storage-manager';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((request) => {
  const authToken = getStorageItem(AUTH_TOKEN_KEY);
  if (authToken) {
    request.headers['Authorization'] = `Bearer ${authToken}`;
  }
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const requestConfig = error?.config;
    const responseStatus = error?.response?.status;

    if (!requestConfig) {
      return Promise.reject(
        new Error('Something went wrong, please try again')
      );
    }

    if (responseStatus === 401) {
      // Prevent infinite loop if refresh token is expired
      if (
        requestConfig.url === '/auth/refresh' ||
        requestConfig.url === '/auth/login'
      ) {
        removeStorageItem(AUTH_TOKEN_KEY);
        return Promise.reject(
          new Error('Session expired, please log in again')
        );
      }

      try {
        const response = await axiosInstance.post('/auth/refresh');
        setStorageItem(AUTH_TOKEN_KEY, response.data.accessToken);
        requestConfig.headers[
          'Authorization'
        ] = `Bearer ${response.data.accessToken}`;
        return axiosInstance(requestConfig);
      } catch (refreshError) {
        removeStorageItem(AUTH_TOKEN_KEY);
        return Promise.reject(
          new Error('Session expired, please log in again')
        );
      }
    }

    console.error('API Error:', error);
    return Promise.reject(
      new Error(error?.response?.data?.error?.message || 'Something went wrong')
    );
  }
);

export default axiosInstance;
