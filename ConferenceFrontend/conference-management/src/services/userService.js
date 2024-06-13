import axios from 'axios';

const API_URL = 'https://localhost:7125/api/Users';

const register = (user) => {
  return axios.post(`${API_URL}/register`, user);
};

const login = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};