import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export const FundTransferService = {
    transferFunds: async (auth_token, fromAccount, toAccount, amount) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/account/fund-transfer`, {
        fromAccount, toAccount, amount, 
      }, 
      {
        headers: {
          Authorization: `Bearer ${auth_token}`,
        },
      }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const AccountDetailsService = {
  getAccountDetails: async (auth_token, customer_id) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/account/details`, {
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

export const AccountSummaryService = {
  getAccountSummary: async (auth_token, accountNumber) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/account/summary`, {
      accountNumber
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

export const AccountStatementService = {
  getAccountStatement: async (auth_token, accountNumber, fromDate, toDate) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/account/statement`, {
      accountNumber, fromDate, toDate
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