import axios from "axios";
const BASE_URL = 'http://localhost:8081/api/v1';
export const AdminLoginService = {
    adminLogin: async (email, password) => {
      try {
        const response = await axios.post(`${BASE_URL}/admin/adminLogin`, {
          email,
          password,
        });
        return response.data;
      } catch (error) {
        throw error;
      }
    },
};
export const AdminRegisterService = {
  adminRegister: async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/admin/add`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const AdminDashboardService = {
    getAdminDashboard: async () => {
      try {
        const response = await axios.get(`${BASE_URL}/admin/getAllAccounts`);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
};