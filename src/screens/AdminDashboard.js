import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import axios from 'axios';
import { AdminDashboardService } from '../actions/AdminActions';
import AdminNavbar from '../components/AdminNavbar';


const AdminDashboard = () => {
    if (!localStorage.getItem('admin_token')) {
        window.location.href = '/admin/login';
    }
    const [userAccountDetails, setUserAccountDetails] = useState([]);
    const handleAdminDashboardPopulation = () => {
        const resp = AdminDashboardService.getAdminDashboard();
        resp.then((res) => {
            console.log(res);
            if (res.status === "success") {
                setUserAccountDetails(res.account_details);
            } else {
                alert("Something went wrong");
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    handleAdminDashboardPopulation();
    const handleAccountActivation = (accNumber) => {
        const resp = axios.post(`http://localhost:8081/api/v1/admin/activate/${accNumber}`);
        const adminActionsResponseMessage = document.querySelector('.admin-actions-response-message');
        resp.then((res) => {
            if (res.data === "Account Reactivated" || res.data === "Account Activated") {
                adminActionsResponseMessage.innerHTML = `<p>Account ${accNumber} activated successfully</p>`;
                adminActionsResponseMessage.setAttribute("style", "background-color: green");
            } else {
                adminActionsResponseMessage.innerHTML = `<p>${res.data}</p>`;
                adminActionsResponseMessage.setAttribute("style", "background-color: red");
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    const handleAccountDeactivation = (accNumber) => {
        const resp = axios.post(`http://localhost:8081/api/v1/admin/disable/${accNumber}`);
        const adminActionsResponseMessage = document.querySelector('.admin-actions-response-message');
        resp.then((res) => {
            if (res.data === "Account Disabled") {
                adminActionsResponseMessage.innerHTML = `<p>Account ${accNumber} deactivated successfully</p>`;
                adminActionsResponseMessage.setAttribute("style", "background-color: green");
            } else {
                adminActionsResponseMessage.innerHTML = `<p>${res.data}</p>`;
                adminActionsResponseMessage.setAttribute("style", "background-color: red");
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    const handleAccountUpdate = (accNumber, amount) => {
        const resp = axios.post(`http://localhost:8081/api/v1/admin/update/`, {
            "accNumber": accNumber,
            "amount": amount
        });
        const adminActionsResponseMessage = document.querySelector('.admin-actions-response-message');
        resp.then((res) => {
            console.log(res);
            if (res.data === "Account Balance updated succesfully!") {
                adminActionsResponseMessage.innerHTML = `<p>Account ${accNumber} updated successfully</p>`;
                adminActionsResponseMessage.setAttribute("style", "background-color: green");
            } else {
                adminActionsResponseMessage.innerHTML = `<p>${res.data}</p>`;
                adminActionsResponseMessage.setAttribute("style", "background-color: red");
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    return(
        <div className="admin-dashboard-container">
        <AdminNavbar />
        <div className='admin-greeting'>
            <h2>Welcome, Admin</h2>
        </div>
        <div className='admin-dashboard-content'>
            <div className='admin-actions-response-message'>
            </div>
            <div className='admin-accounts-table'>
                <table>
                    <thead>
                        <tr>
                            <th>Account ID</th>
                            <th>Creation Date</th>
                            <th>Balance</th>
                            <th>Has Credit Card</th>
                            <th>Has Debit Card</th>
                            <th>Account Status</th>
                            <th>Activation</th>
                            <th>Deactivation</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userAccountDetails.map((account) => {
                            return (
                                <tr key={account.id}>
                                    <td>{account.id}</td>
                                    <td>{account.activationDate}</td>
                                    <td>{account.balance}</td>
                                    <td>{account.hasCreditCard ? "Yes" : "No"}</td>
                                    <td>{account.hasDebitCard ? "Yes" : "No"}</td>
                                    <td>{account.accountStatus ? "Active" : "Inactive"}</td>
                                    <td><button onClick={() => handleAccountActivation(account.id)}>Activate</button></td>
                                    <td><button onClick={() => handleAccountDeactivation(account.id)}>Deactivate</button></td>
                                    <td><button onClick={() => handleAccountUpdate(account.id, 
                                        prompt("Enter amount to update", 0.0)    
                                    )}>Update</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
        </div>
         </div>

    )
}
   

export default AdminDashboard;
