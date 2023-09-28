import React from 'react';
import CustomerNavbar from './CustomerNavbar';
const NotFound = () => {
  return (
    <div>
        <CustomerNavbar />
      <h1 style={
        {
          color: 'red',
          textAlign: 'center',
          marginTop: '20px',
          textAlign: 'center',
        }
      }>404 - Not Found</h1>
      <p style={
        {
          color: 'red',
          textAlign: 'center',
          marginTop: '20px',
          textAlign: 'center',
        }
      }>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
