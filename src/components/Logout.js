// logout component
// on click clears the local storage and redirects to login page
import React from 'react';
import { LogoutService } from '../actions/AuthService';

const Logout = () => {
    const handleLogout = () => {
        LogoutService.logout();
    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
export default Logout;