import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

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
  getCustomerDetails: async (auth_token, customer_id) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/customer/details`,{auth_token, customer_id}, {
        headers: {
          Authorization: `Bearer ${auth_token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const ChangePasswordService = {
  changePassword: async (username, new_password, otp) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/customer/change-password`, {
        username,
        new_password,
        otp
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


