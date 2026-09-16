import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, // cookies bhejne ke liye (JWT cookie-based)
});

export default api;