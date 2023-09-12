import React, { useState } from 'react';

const CustomerDashboard = () => {
    const customer_details = JSON.parse(localStorage.getItem('customer_details'));
    const accountStatus = customer_details.accountStatus;
    return (
        <div className="container">
            <div className="row">
                <div>
                    <h1>Welcome {customer_details.name}</h1>
                    <h3>Account Status: {accountStatus}</h3>
                </div>
                {/* align on left */}
                <div style={{border: "1px solid black", width: "50%", margin: "5rem", padding: "2rem"}}>
                <h1>Account Details</h1>
                    <div style={{display: "flex", flexDirection: "column"}}>
                    <span>Account Number: </span>
                    <span>Account Balance: </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerDashboard;