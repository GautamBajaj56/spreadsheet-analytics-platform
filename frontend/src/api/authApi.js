import axios from 'axios';

const API_URL = 'https://excel-analytics-platform-c6st.onrender.com/api/auth/';

const register = (userData) => {
  return axios.post(API_URL + 'register', userData);
};

const login = (userData) => {
  return axios.post(API_URL + 'login', userData);
};

export default {
  register,
  login,
};
