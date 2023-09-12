import React from 'react';
import {Link} from 'react-router-dom';


const AccountDetails = () => {
    const account_details = JSON.parse(localStorage.getItem('account_details'));
    return (
        <div className="container">
            <h1>Complete Account Details</h1>
            <div style={{display: "flex", flexDirection: "column"}}>
                <table style={{border: "1px solid black", 
                width: "50%", alignSelf: "center", margin: "5rem", padding: "2rem"
            }}>
                    <tr>
                        <td>Account Number</td>
                        <td>{account_details.accountNumber}</td>
                    </tr>
                    <tr>
                        <td>Account Activation Date</td>
                        <td>{account_details.AccountActivationDate}</td>
                    </tr>
                    <tr>
                        <td>Balance</td>
                        <td>{account_details.Balance}</td>
                    </tr>
                    <tr>
                        <td>Customer ID</td>
                        <td>{account_details.Customer_id}</td>
                    </tr>
                </table>
            </div>
            <Link to="/customer/dashboard">Back to Dashboard</Link>
        </div>
    );
}

export default AccountDetails;