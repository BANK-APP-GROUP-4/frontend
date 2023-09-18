import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FundTransferService} from '../actions/AccountsActions';
import CustomerNavbar from '../components/CustomerNavbar';
import Footer from '../components/Footer';

const TransferFunds = () => {
    const auth_token = localStorage.getItem('auth_token');
    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [amount, setAmount] = useState('');
    const handleTransferFunds = async (e) => {
        e.preventDefault();
        try {
            const response = await FundTransferService.transferFunds(auth_token, fromAccount, toAccount, amount);
            if (response.status === 'success') {
                alert(response.message);
            }
            else {
                alert(response.message);
            }
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <div>
            <CustomerNavbar />
            <div className='form-container'>
            <form onSubmit={handleTransferFunds}>
            <h2>Transfer Funds</h2>
                <input
                    type="text"
                    placeholder="From Account"
                    value={fromAccount}
                    onChange={(e) => setFromAccount(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="To Account"
                    value={toAccount}
                    onChange={(e) => setToAccount(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    value={amount}
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