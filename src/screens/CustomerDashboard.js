import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomerNavbar from '../components/CustomerNavbar';
import {CustomerDetailsService} from '../actions/CustomerActions';
import { AccountDetailsService } from '../actions/AccountsActions';
import SummaryPNG from "../assets/summary.png";
import AccountStatementPNG from "../assets/acc-statement.png";
import TransferPNG from "../assets/transfer.png";
import Footer from '../components/Footer';

const CustomerDashboard = () => {
    const auth_token = localStorage.getItem('auth_token');
    if(!auth_token){
        window.location.href = '/customer/login';
    }
    else {
        async function getCustomerDetails() {
        const customer_details = await CustomerDetailsService.getCustomerDetails(auth_token);
        if(customer_details.status === "success"){
            localStorage.setItem('customer_details', JSON.stringify(customer_details.customer_details));
        }
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
        
        getCustomerDetails();
    }
    const customer_details = JSON.parse(localStorage.getItem('customer_details'));
    
    return (
        <div className="customer-dashboard-container">
            <CustomerNavbar />
            <div className='customer-greeting'>
                <h2>Welcome, {customer_details.firstName} </h2>
            </div>
            <div className='dashboard-card-container'>
                <Link className='dashboard-card' to='/customer/account-summary'>
                        <div className='dashboard-card-img'>
                        <img className='dash-link-png' src={SummaryPNG} alt="Summary" />
                        <h2>Account Summary</h2>
                        </div>
                </Link>
                <Link className='dashboard-card' to='/customer/account-statement'>
                        <div className='dashboard-card-img'>
                        <img className='dash-link-png' src={AccountStatementPNG} alt="Summary" />
                        <h2>Account Statement</h2>
                        </div>
                </Link>
                <Link className='dashboard-card' to='/customer/transfer-funds'>
                        <div className='dashboard-card-img'>
                        <img className='dash-link-png' src={TransferPNG} alt="Transfer" />
                        <h2>Transfer Funds</h2>
                        </div>
                </Link>
                </div>
                <Footer />
        </div>
    )
}

export default CustomerDashboard;