import React from 'react';
import { LogoutService } from '../actions/CustomerActions';

const Logout = () => {
    const handleLogout = () => {
        LogoutService.logout();
    }
    return (
        <div className='customer-top-navbar'>
            <button className='logout-btn' onClick={handleLogout}>Logout</button>
        </div>
    );
}
export default Logout;