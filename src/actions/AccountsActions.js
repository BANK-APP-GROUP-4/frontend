import axios from 'axios';

const BASE_URL = 'http://localhost:8081';

export const FundTransferService = {
    transferFunds: async (auth_token, fromAccount, toAccount, amount) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/`, {
        auth_token, fromAccount, toAccount, amount
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
