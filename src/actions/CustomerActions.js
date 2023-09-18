import axios from 'axios';

const BASE_URL = 'http://localhost:8081';

export const LoginService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/customer/login`, {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const CustomerDetailsService = {
  getCustomerDetails: async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/customer/details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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


