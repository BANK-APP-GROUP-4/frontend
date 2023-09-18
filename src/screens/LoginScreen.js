import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {LoginService} from '../actions/CustomerActions';
import Footer from '../components/Footer';
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
      if (response.status === "success") {
        localStorage.setItem('auth_token', response.token);
        // localStorage.setItem('customer_details', JSON.stringify(response.customer_details));
        // localStorage.setItem('account_details', JSON.stringify(response.account_details));
        window.location.href = '/customer/dashboard';
      }
      else{
        alert(response.message);
      }
      
    } catch (error) {
      
    }
  };

  return (
    <div>
      <div className='form-container'>
      <form onSubmit={handleLogin}>
      <h2>Login</h2>

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
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default LoginForm;