import React, { useState } from 'react';
import CustomerNavbar from '../components/CustomerNavbar';
import { AccountDetailsService } from '../actions/AccountsActions';
import {AccountStatementService} from '../actions/AccountsActions';
import Footer from '../components/Footer';
const AccountStatement = () => {
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const auth_token = localStorage.getItem('auth_token');
    if (!auth_token) {
        window.location.href = '/customer/login';
    }
    
    async function getAccountDetails(e) {
        const customer_id = JSON.parse(localStorage.getItem('customer_details')).id;
        const account_details = await AccountDetailsService.getAccountDetails(auth_token, customer_id);
        if(account_details.status === "success"){
            localStorage.setItem('savings_account_details', JSON.stringify(account_details.savings_account_details));
            // localStorage.setItem('fd_account_details', JSON.stringify(account_details.fdAccountList));
        }            
    }
    getAccountDetails();
    const savings_account_details = JSON.parse(localStorage.getItem('savings_account_details'));
    const saving_account_list = savings_account_details.map((account) => { return account.id });
    const handleAccountStatement = async (e) => {
        e.preventDefault();
        const status_msg_div = document.querySelector('.status_msg_div');
        const selectedAccountNumber = selectedAccount;
        try {
            var response;
            if(fromDate > toDate){
                status_msg_div.innerHTML = `<p class='error-msg'>
                From date cannot be greater than to date
                </p>`;
                return;
            }
            

            else {
                response = await AccountStatementService.getAccountStatement(auth_token, selectedAccountNumber, fromDate, toDate);
            }
            const AccountStatementResponse = response.transaction; 
            if (response.status === 'success') {
                const accountSummaryRecentTransactionsCntr = document.querySelector('.account-summary-recent-transactions-cntr');
                accountSummaryRecentTransactionsCntr.innerHTML = `
                <h2 class="selected-account-heading">Account Statement For 
                ${selectedAccountNumber}
                </h2>
                <table class="account-summary-recent-transactions-table">
                <thead>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${AccountStatementResponse.map((transaction) => {
                    return `<tr>
                    <td>${transaction.senderAcc.id}</td>
                    <td>${transaction.receiverAcc.id}</td>
                    <td>${transaction.receiverAcc.id == selectedAccountNumber ? `<span class="mi">+ ${transaction.amount}</span>` : `<span class="mo">- ${transaction.amount}</span>`}</td>
                    <td>${transaction.dateOfTransaction}</td>
                    <td>${transaction.status}</td>
                    </tr>`
                })}
                </tbody>
            </table>
                `;
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
            <h2 className='h2-headings'>Account Statement</h2>
            <div className='status_msg_div'>
      </div>
            <form className='account-statement-form' onSubmit={handleAccountStatement}>
                <select required className='account-statement-select' onChange={(e) => setSelectedAccount(e.target.value)}>
                    <option value=''>Select Account</option>
                    {saving_account_list.map((account) => {
                        return <option value={account}>{account}</option>
                    })}
                </select>
                <input required className='account-statement-from-date' type='date' onChange={(e) => setFromDate(e.target.value)} />
                <input required className='account-statement-to-date' type='date' onChange={(e) => setToDate(e.target.value)} />
                <button className='account-statement-submit-btn' type='submit'>Get Statement</button>
            </form>
            <div className='account-summary-recent-transactions-cntr' id = "accountStatementMainDiv">
            </div>
            <Footer />
        </div>
        
    )
}

export default AccountStatement