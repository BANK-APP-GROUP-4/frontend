import React from 'react';
import { LogoutService } from '../actions/CustomerActions';
import { Link } from 'react-router-dom';
const CustomerNavbar = () => {
    const handleLogout = () => {
        LogoutService.logout();
    }
    return (
        <div>
            
            <div className='customer-top-navbar'>
                
                    <Link className='site-logo-text' to="/">
                    NeoFinTech
                    </Link>
                
                {
                    localStorage.getItem('auth_token') ?
                    <div className='customer-link-nav'>
                    <Link className="dashboard-link" to='/customer/dashboard'>Dashboard</Link>
                    <Link to='/customer/account-summary'>Accounts Summary</Link>
                    <Link to='/customer/account-statement'>Account Statement</Link>
                    <Link to='/customer/transfer-funds'>Transfer Funds</Link>
                    <Link to='/customer/details'>Customer Details</Link>
                    <button className='logout-btn' onClick={handleLogout}>Logout</button>

                    </div>                
                        :
                        !localStorage.getItem('admin_token') ?
                        <div>
                            <button className='admin-login-btn'>
                                <Link to='/admin/login'>Admin Login</Link>
                            </button>
                        </div>
                        :
                        <div>
                        </div>
                }
            </div>
        </div>
    )
}
export default CustomerNavbar;