import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {LoginService} from '../actions/AuthService';
import '../App.css';
import { styled } from 'styled-components';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  if (localStorage.getItem('customer_token')) {
    window.location.href = '/customer/dashboard';
  }
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await LoginService.login(username, password);
      console.log(response.transaction_details)
      if (response.status === "Success") {
        localStorage.setItem('customer_token', response.token);
        localStorage.setItem('customer_details', JSON.stringify(response.customer_details));
        localStorage.setItem('account_details', JSON.stringify(response.account_details));
        localStorage.setItem('transaction_details', JSON.stringify(response.transaction_details));
        // console.log(response.transaction_details)
        window.location.href = '/customer/dashboard';
      }
      else{
        alert(response.message);
      }
      
    } catch (error) {
      
    }
  };

  return (
    <Container>
    <div>
      
      <Form className="login-form" onSubmit={handleLogin}>
      <h2>Login</h2>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       <br></br>
        <FormButton className="forms-button" type="submit">Log In</FormButton>
      </Form>
      <br></br>
      <div>
                <Link to="/customer/register">Don't have an account? Register here.</Link>
      </div>
    </div>
    </Container>
  );
};

const Container=styled.div`
text-align: center;
display: flex;
min-height: 100vh;
align-items: center;
justify-content: center;  
background-image: linear-gradient(to right, #decba4,#3e5151);
`;

const Form=styled.form`
display: flex;
  flex-direction: column;
`;
const Input=styled.input`
margin: 0.25rem 0;
  padding: 1rem;
  border:none;
  border-radius: 10px;
`;
const Select=styled.select`
margin: 0.25rem 0;
  padding: 1rem;
  border:none;
  border-radius: 10px;
`;
const FormButton=styled.button`
border: none;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
`;


export default LoginForm;
