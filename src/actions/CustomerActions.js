import axios from 'axios';

const BASE_URL = 'http://localhost:8081';

export const LoginService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/customer/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const CustomerDetailsService = {
  getCustomerDetails: async (auth_token, email) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/customer/details`, {
        email
      }, {
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
  changePassword: async (auth_token, email, password, otp) => {
    try {
      const response = await axios.put(`${BASE_URL}/api/v1/customer/changePassword/${otp}`, {
        email,
        password
      }, {
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

export const LogoutService = {
  logout: () => {
    localStorage.clear();
    window.location.href = '/customer/login';
  },
};


