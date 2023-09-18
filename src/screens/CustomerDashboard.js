import React, { useState } from 'react';
import { LogoutService } from '../actions/CustomerActions';
import { Link } from 'react-router-dom';
import CustomerNavbar from '../components/CustomerNavbar';
import {CustomerDetailsService} from '../actions/CustomerActions';
import Logout from '../components/Logout';
import SummaryPNG from "../assets/summary.png";
import TransferPNG from "../assets/transfer.png";
import Footer from '../components/Footer';

const CustomerDashboard = () => {
    // const auth_token = localStorage.getItem('customer_token');
    // if(!auth_token){
    //     window.location.href = '/customer/login';
    // }
    // else {
    //     const customer_details = CustomerDetailsService.getCustomerDetails(auth_token);
    //     localStorage.setItem('customer_details', JSON.stringify(customer_details.customer_details));
    // }
    const handleLogout = () => {
        LogoutService.logout();
    }
    // const customer_details = JSON.parse(localStorage.getItem('customer_details'));
    
    return (
        <div className="customer-dashboard-container">
            <CustomerNavbar />
            <div className='customer-greeting'>
                <h2>Welcome,</h2>
                <h4>Your Account Status is: </h4>
            </div>
            <div className='dashboard-card-container'>
                {/* Available Balance, three cards summary, Transfer Money */}
                <div className='dashboard-card dashboard-card-bal'>
                    <h2>Available Balance</h2>
                    <h3>Rs. 10000</h3>
                </div>
                <Link className='dashboard-card' to='/customer/account-summary'>
                        <div className='dashboard-card-img'>
                        <img className='dash-link-png' src={SummaryPNG} alt="Summary" />
                        <h2>Account Summary</h2>
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