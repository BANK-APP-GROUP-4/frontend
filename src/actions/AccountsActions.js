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
  getAccountStatement: async (auth_token, id, from, to) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/transaction/summary`, {
      id, from, to
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

export const savingsAccountCreationService = {
  savingsAccountCreation: async (auth_token, customerId, depositAmount, hasCreditCard, hasDebitCard) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/account/savings`, {
      customerId, depositAmount, hasCreditCard, hasDebitCard
    }, {
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }

}
};
export const fdAccountCreationService = {
  fdAccountCreation: async (auth_token, customerId, principalAmount, maturityPeriod) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/account/fixed`, {
      customerId, principalAmount, maturityPeriod
    }, {
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }

}
};