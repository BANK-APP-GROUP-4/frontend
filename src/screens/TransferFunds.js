import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FundTransferService} from '../actions/AccountsActions';
import CustomerNavbar from '../components/CustomerNavbar';
import Footer from '../components/Footer';
import { AccountDetailsService } from '../actions/AccountsActions';

const TransferFunds = () => {
    const auth_token = localStorage.getItem('auth_token');
    if (!auth_token) {
        window.location.href = '/customer/login';
    }
    
    async function getAccountDetails() {
        const customer_id = JSON.parse(localStorage.getItem('customer_details')).id;
        const account_details = await AccountDetailsService.getAccountDetails(auth_token, customer_id);
        if(account_details.status === "success"){
            localStorage.setItem('savings_account_details', JSON.stringify(account_details.savingsAccountList));
            localStorage.setItem('fd_account_details', JSON.stringify(account_details.fdAccountList));
        }            
    }
    getAccountDetails();
    const savings_account_details = JSON.parse(localStorage.getItem('savings_account_details'));
    const saving_account_list = savings_account_details.map((account) => { return account.accountNumber });
    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [amount, setAmount] = useState('');
    const handleTransferFunds = async (e) => {
        e.preventDefault();
        try {
        const response = await FundTransferService.transferFunds(auth_token, fromAccount, toAccount, amount);
        const status_msg_div = document.querySelector('.status_msg_div');
        if (response.status === "success") {
        status_msg_div.innerHTML = `<p class='success-msg'>${response.message}</p>`;
      }
      else {
        status_msg_div.innerHTML = `<p class='error-msg'>${response.message}</p>`;
      }
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <div>
            <CustomerNavbar />
            <h2 className='h2-headings'>Fund Transfer</h2>
            <div className='form-container'>
            <form onSubmit={handleTransferFunds}>
            <h2>Transfer Funds</h2>
            <div className='status_msg_div'></div>
                <select className='form-select-funds-transfer'
                    value={fromAccount}
                    onChange={(e) => setFromAccount(e.target.value)}
                >
                    <option value="">From Account</option>
                    {saving_account_list.map((account) => {
                        return <option value={account}>{account}</option>
                    })}
                </select>
                <input
                    type="text"
                    placeholder="To Account"
                    value={toAccount}
                    required
                    onChange={(e) => setToAccount(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    value={amount}
                    required
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button className='form-container-btn' type="submit">Transfer Funds</button>
            </form>
        </div>
        <Footer />

        </div>
        
    )
}
export default TransferFunds;