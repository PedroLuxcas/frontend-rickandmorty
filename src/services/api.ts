import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 segundos
});

// Interceptor para logs de requisição
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

// Interceptor para logs de resposta
api.interceptors.response.use(
  (response) => {
    console.log(`✅ ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    if (error.response) {
      // Erro com resposta do servidor
      console.error(`❌ ${error.response.status} ${error.config.url}:`, error.response.data);
    } else if (error.request) {
      // Erro de rede (servidor offline)
      console.error('❌ Network Error: Servidor não respondeu');
    } else {
      // Outros erros
      console.error('❌ Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;