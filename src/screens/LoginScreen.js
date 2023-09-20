import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {LoginService} from '../actions/CustomerActions';
import Footer from '../components/Footer';
import { CustomerDetailsService } from '../actions/CustomerActions';
import CustomerNavbar from '../components/CustomerNavbar';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  if (localStorage.getItem('auth_token')) {
    window.location.href = '/customer/dashboard';
  }
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await LoginService.login(username, password);
      const status_msg_div = document.querySelector('.status_msg_div');
      if (response.status === "success") {
        localStorage.setItem('auth_token', response.auth_token);
        const auth_token = localStorage.getItem('auth_token');
        async function getCustomerDetails() {
          const customer_details = await CustomerDetailsService.getCustomerDetails(auth_token);
          if(customer_details.status === "success"){
              localStorage.setItem('customer_details', JSON.stringify(customer_details.customer_details));
          }
      }
      getCustomerDetails();
        status_msg_div.innerHTML = `<p class='success-msg'>${response.message}</p>`;
        window.location.href = '/customer/dashboard';
      }
      else {
        status_msg_div.innerHTML = `<p class='error-msg'>${response.message}</p>`;
      }
      
    } catch (error) {
      
    }
  };

  return (
    <div>
    <CustomerNavbar />
      <div className='form-container'>
      <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <div className='status_msg_div'>
        
      </div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='form-container-btn' type="submit">Login</button>
        <Link to='/customer/register'>New User? Register Here</Link>
        <Link to='/customer/reset-password'>Forgot Password?</Link>
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default LoginForm;