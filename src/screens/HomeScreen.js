import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
    const isLoggedIn = localStorage.getItem('customer_token') ? true : false;
    return (
        // logout component to right top corner
        <div style={{textAlign:"center", border:"1px solid black", padding:"10px", margin: "5rem"}}>
            
        <h2>Welcome to the BankApp</h2>
        <div>
            {/* if logged in show dashboard else show login and register */}
            {isLoggedIn ? <Link to="/customer/dashboard">Dashboard</Link> : 
            <div>
                <div style={{margin: "2rem"}}>
                <Link to="/customer/login">Login</Link>
                </div>
                <Link to="/customer/register">Register</Link>
            </div>
            }
        </div>
        </div>
    );
}

export default HomeScreen;