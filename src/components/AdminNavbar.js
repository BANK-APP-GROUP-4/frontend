import React from 'react';
import { LogoutService } from '../actions/CustomerActions';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const AdminNavbar = () => {
    const handleLogout = () => {
        LogoutService.logout();
    }
    return (
        <div>
            
            <div className='customer-top-navbar' style={{background: "#c2e9fb", borderBottomColor: "white" }}>
                    <Link className='site-logo-text' to="/" >
                    NeoFinTech
                    </Link>

                    {
                        localStorage.getItem('admin_token') ? 
                    <button className='logout-btn' onClick={handleLogout}>Logout</button>
                    :
                    <div>
                    </div>
                    }

            </div>
            <Footer />
        </div>
    )
}
export default AdminNavbar;