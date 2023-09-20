import {ChangePasswordService} from '../actions/CustomerActions';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomerNavbar from '../components/CustomerNavbar';
import Footer from '../components/Footer';
const ResetPassword = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOTP] = useState('');
const ChangePasswordHandler = async (e) => {
    e.preventDefault();
    try {
        const response = await ChangePasswordService.changePassword(username, password, otp);
        const status_msg_div = document.querySelector('.status_msg_div');
        if (response.status === "success") {
            status_msg_div.innerHTML = `<p class='success-msg'>${response.message}</p>`;
        }
        else {
            status_msg_div.innerHTML = `<p class='error-msg'>${response.message}</p>`;
        }
    } catch (error) {
        
    }
}
    return (
        <div>
        <CustomerNavbar />
      <div className='form-container'>
      <form onSubmit={ChangePasswordHandler}>
      <h2>Reset Password</h2>
      <div className='status_msg_div'>
      </div>
      <div className='status_msg_div'>
        
      </div>
        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="OTP"
          value={otp}
          required
          onChange={(e) => setOTP(e.target.value)}
        />
        <button className='form-container-btn' type="submit">Change Password</button>
        <Link to='/customer/login'>Login Here</Link>
        </form>
    </div>
    <Footer />
    </div>

    )
}
export default ResetPassword;