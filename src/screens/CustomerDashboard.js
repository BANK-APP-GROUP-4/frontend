import React, { useState } from 'react';
import { LogoutService } from '../actions/AuthService';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
    const handleLogout = () => {
        LogoutService.logout();
    }
    const customer_details = JSON.parse(localStorage.getItem('customer_details'));
    const account_details = JSON.parse(localStorage.getItem('account_details'));
    if (!localStorage.getItem('customer_token')) {
        window.location.href = '/customer/login';
    }
    const accountStatus = account_details.accountNumber ? "Active" : "Inactive";
    return (
        <div className="container">
            <button style={
                {float: "right", margin: "2rem", padding: "1rem", backgroundColor: "red", color: "white", border: "5px solid red", borderRadius: "5px",
            cursor: "pointer"
            }
            } onClick={handleLogout}>Logout</button>
            <div className="row">
                <div>
                    <h1>Welcome {customer_details.name}</h1>
                    <h3>Account Status: {accountStatus}</h3>
                </div>
                <div style={{border: "1px solid black", width: "50%", margin: "5rem", padding: "2rem"}}>
                <h1>Account Details</h1>
                    <div style={{display: "flex", flexDirection: "column"}}>
                    <span>Account Number:&nbsp; <b>{account_details.accountNumber ? account_details.accountNumber : "Not Available"} </b></span>
                    <span>Account Balance: &nbsp; <b>{account_details.Balance ? account_details.Balance : "Not Available"}</b></span>
                    </div>
                </div>
                <div>
                    <h1>
                        <Link to="/customer/dashboard/account-details">Complete Account Details</Link>
                    </h1>
                </div>
            </div>
            {/* home */}
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default CustomerDashboard;