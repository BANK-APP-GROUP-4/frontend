import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export const LoginService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const LogoutService = {
  logout: () => {
    localStorage.clear();
    window.location.href = '/customer/login';
  },
};


