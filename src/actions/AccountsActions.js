import axios from 'axios';

const BASE_URL = 'http://localhost:8081';

export const FundTransferService = {
    transferFunds: async (auth_token, senderAccId, receiverAccId, amount) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/transaction/send`, {
        senderAccId, receiverAccId, amount, 
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
    const response = await axios.post(`${BASE_URL}/api/v1/account/savings/details`, {
      customer_id
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

export const AccountSummaryService = {
  getAccountSummary: async (auth_token, id) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/transaction/last`, {
      id,
      k : 5
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
  getAccountStatement: async (auth_token, id, fromDate, toDate) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/transaction/last`, {
      id, fromDate, toDate, k : 500
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