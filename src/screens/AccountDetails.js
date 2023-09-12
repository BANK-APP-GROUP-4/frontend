import React from 'react';
import {Link} from 'react-router-dom';


const AccountDetails = () => {
    const account_details = JSON.parse(localStorage.getItem('account_details'));
    return (
        <div className="container">
            <h1>Complete Account Details</h1>
            <Link to="/customer/dashboard">Back to Dashboard</Link>
        </div>
    );
}

export default AccountDetails;