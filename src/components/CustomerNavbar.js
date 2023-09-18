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
                
                    <div className='customer-link-nav'>
                        <Link to='/customer/details'>Customer Details</Link>
                        <Link to='/customer/account-details'>Account Details</Link>
                        <Link to='/customer/account-summary'>Accounts Summary</Link>
                        <Link to='/customer/transfer-funds'>Transfer Funds</Link>
                    </div>
                    <button className='logout-btn' onClick={handleLogout}>Logout</button>

            </div>
        </div>
    )
}
export default CustomerNavbar;