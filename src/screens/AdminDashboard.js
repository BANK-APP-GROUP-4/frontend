import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import AdminNavbar from '../components/AdminNavbar';
import SummaryPNG from "../assets/summary.png";
import TransferPNG from "../assets/transfer.png";
import Footer from '../components/Footer';

const AdminDashboard = () => {
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
