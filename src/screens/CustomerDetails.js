import {CustomerDetailsService} from '../actions/CustomerActions';
import {ChangePasswordService} from '../actions/CustomerActions';
import { useState } from 'react';
import CustomerNavbar from '../components/CustomerNavbar';
import Footer from '../components/Footer';
const CustomerDetails = () => {
    const [password, setPassword] = useState('');
    const [otp, setOTP] = useState('');
    const auth_token = localStorage.getItem('auth_token');
    const email = localStorage.getItem('email');
    if(!auth_token){
        window.location.href = '/customer/login';
    }
    else {
        async function getCustomerDetails() {
        const customer_details = await CustomerDetailsService.getCustomerDetails(auth_token, email);
        if(customer_details.status === "success"){
            localStorage.setItem('customer_details', JSON.stringify(customer_details.customer_details));
        }
    }
    getCustomerDetails();
}
const ChangePasswordHandler = async (e) => {
    e.preventDefault();
    try {
        const username = JSON.parse(localStorage.getItem('customer_details')).email;
        const response = await ChangePasswordService.changePassword(auth_token, username, password, otp);
        const status_msg_div = document.querySelector('.status_msg_div');
        if (response === "Success!") {
            status_msg_div.innerHTML = `<p class='success-msg'>
            Change Password Successful!
            </p>`;
        }
        else {
            status_msg_div.innerHTML = `<p class='error-msg'>
            Wrong OTP! OR Details entered are incorrect!
            </p>`;
        }
    } catch (error) {
        
    }
}
    const customer_details = JSON.parse(localStorage.getItem('customer_details'));
    return (
        <div>
        <CustomerNavbar />
        <h2 className="h2-headings">Customer Details</h2>
      <div className='customer-details-form'>
      <form onSubmit={ChangePasswordHandler}>
      <div className='status_msg_div'>
      </div>
      <div className='status_msg_div'>
        
      </div>
      <label>Customer ID</label>
        <input
          type="text"
          placeholder="Customer ID"
          value={customer_details.id}
          disabled
        />
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          value={customer_details.firstName}
          disabled
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          value={customer_details.lastName}
          disabled
        />
        <label>Address</label>
        <input
          type="text"
          placeholder="Address"
          value={customer_details.address}
          disabled
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          value={customer_details.email}
          disabled
        />
        <label>Age</label>
        <input
          type="text"
          placeholder="Age"
          value={customer_details.age}
          disabled
        />
        <label>Mobile Number</label>
        <input 
        type="text"
        placeholder="Phone Number"
        value={customer_details.mobileNumber}
        disabled
        />
        <label>New Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>OTP</label>
        <input
          type="password"
          placeholder="OTP"
          value={otp}
          required
          onChange={(e) => setOTP(e.target.value)}
        />
        <button className='form-container-btn' type="submit">Change Password</button>
        </form>
    </div>
    {/* <Footer /> */}
    </div>

    )
}
export default CustomerDetails;