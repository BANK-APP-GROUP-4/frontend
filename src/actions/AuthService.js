import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const AuthService = {
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

export default AuthService;
