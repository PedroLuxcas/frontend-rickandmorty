import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for request logs
api.interceptors.request.use(
  (config) => {
    console.log(`📡 ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Interceptor for response logs
api.interceptors.response.use(
  (response) => {
    console.log(`✅ ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    if (error.response) {
      // Error with server response
      console.error(`❌ ${error.response.status} ${error.config.url}:`, error.response.data);
    } else if (error.request) {
      // Network error (server offline)
      console.error('❌ Network Error: Servidor não respondeu');
    } else {
      // Others error 
      console.error('❌ Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;