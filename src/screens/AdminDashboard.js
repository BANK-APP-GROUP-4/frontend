import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import AdminNavbar from '../components/AdminNavbar';


const AdminDashboard = () => {
    // if (!localStorage.getItem('admin_token')) {
    //     window.location.href = '/admin/login';
    // }
    return(
        <div className="admin-dashboard-container">
        <AdminNavbar />
        <div className='admin-greeting'>
            <h2>Welcome, Admin</h2>
            
        </div>
         </div>

    )
}
   

export default AdminDashboard;
