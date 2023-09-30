import React, { useState } from "react";
import CustomerNavbar from "../components/CustomerNavbar";
import Footer from "../components/Footer";
import { AccountDetailsService } from '../actions/AccountsActions';
import {AccountSummaryService} from '../actions/AccountsActions';
const AccountSummary = () => {
    const auth_token = localStorage.getItem('auth_token');
    if (!auth_token) {
        window.location.href = '/customer/login';
    }
    
    async function getAccountDetails() {
        const customer_id = JSON.parse(localStorage.getItem('customer_details')).id;
        const account_details = await AccountDetailsService.getAccountDetails(auth_token, customer_id);
        if(account_details.status === "success"){
            localStorage.setItem('savings_account_details', JSON.stringify(account_details.savings_account_details));
            localStorage.setItem('fd_account_details', JSON.stringify(account_details.fdAccountList));
        }            
    }
    getAccountDetails();
    const savings_account_details = JSON.parse(localStorage.getItem('savings_account_details'));
    const saving_account_list = savings_account_details.map((account) => { return account.id });
    const handleAccountSummary = async (e) => {
        const selectedAccountNumber = e.target.value;
        const savings_account_details = JSON.parse(localStorage.getItem('savings_account_details'));
        const selectedAccountDetails = savings_account_details.filter((account) => { return account.id == selectedAccountNumber });
        console.log(selectedAccountDetails);
        const accountSummaryDetailsDiv = document.querySelector('.account-summary-details');
        accountSummaryDetailsDiv.innerHTML = `
        <table class="account-summary-details-table">
                <tbody>
                    <tr>
                        <td>Account Number</td>
                        <td>
                        ${selectedAccountDetails[0].id}
                        </td>
                    </tr>
                    <tr>
                        <td>Account Balance</td>
                        <td>
                        ${selectedAccountDetails[0].balance}
                        </td>
                    </tr>
                    <tr>
                        <td>Account Type</td>
                        <td>
                        Savings Account
                        </td>
                    </tr>
                    <tr>
                        <td>Account Opened On</td>
                        <td>
                        ${selectedAccountDetails[0].activationDate}
                        </td>
                    </tr>
                </tbody>
            </table>
        `;
        try {
            const response = await AccountSummaryService.getAccountSummary(auth_token, selectedAccountNumber);
            const account_summary = response.transactions;
            if (response.status === 'success') {
                const accountSummaryRecentTransactionsCntr = document.querySelector('.account-summary-recent-transactions-cntr');
                accountSummaryRecentTransactionsCntr.innerHTML = `
                <h2>Recent Transactions</h2>
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
                    ${account_summary.map((transaction) => {
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
        <div className="acc-summary">
            <CustomerNavbar />
            
            <h2 className="h2-headings">Account Summary</h2>
            <div className="account-selection-form-div">
                    
                    <label for="account-selection-form-select">Account Number</label>
                    <br />
        <select required onChange={handleAccountSummary}>
        <option value="">Select an account</option>
        {saving_account_list.map((accountNumber) => (
          <option key={accountNumber} value={accountNumber}>
            {accountNumber}
          </option>
        ))}
            </select>
            </div>
            <div className="account-summary-details">
            <table className="account-summary-details-table">
                
            </table>
            </div>
            
            <div className="account-summary-recent-transactions-cntr">
            
            </div>
            <Footer />
        </div>
    );
}
export default AccountSummary;