import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/auth/register`, { name, email, password });
  return response.data;
};

export const getTrades = async () => {
  const response = await axios.get(`${API_URL}/trading/history`);
  return response.data;
};

export const getSignals = async () => {
  const response = await axios.get(`${API_URL}/trading/signals`);
  return response.data;
};

export const executeTrade = async (symbol, type, amount) => {
  const response = await axios.post(`${API_URL}/trading/trade`, { symbol, type, amount });
  return response.data;
};