import React, { useState } from 'react';
import AuthService from '../actions/AuthService';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  if (localStorage.getItem('customer_token')) {
    window.location.href = '/customer/dashboard';
  }
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await AuthService.login(username, password);
      if (response.status === "success") {
        localStorage.setItem('customer_token', response.token);
        localStorage.setItem('customer_details', JSON.stringify(response.customer_details));
        window.location.href = '/customer/dashboard';
      }
      else{
        console.log(response.message);
      }
      
    } catch (error) {
      
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
