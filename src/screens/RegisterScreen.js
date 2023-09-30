import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CustomerNavbar from "../components/CustomerNavbar";
import Footer from "../components/Footer";
import axios from "axios";
const RegisterUser= () => {
    
    const baseURL = "http://localhost:8081/api/v1/customer/register";
    const navigate = useNavigate();
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [address,setAddress] = useState('');
    const [pass,setPass] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');
    const [gender,setGender] = useState('');
    const [phno,setPhno] = useState('');
    const [depositAmount,setDepositAmount] = useState('');
    const [creditCardNeeded,setCreditCardNeeded] = useState('');
    const [debitCardNeeded,setDebitCardNeeded] = useState('');
    

    const fnameChangeHandler = (event) => {
        setFname(event.target.value);
    };
    const lnameChangeHandler = (event) => {
        setLname(event.target.value);
    };
    const addressChangeHandler = (event) => {
        setAddress(event.target.value);
    };
    const passChangeHandler = (event) => {
        setPass(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    };
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };
    const genderChangeHandler = (event) => {
        setGender(event.target.value);
    };
    const phnoChangeHandler = (event) => {
        setPhno(event.target.value);
    };
    const depositAmountChangeHandler = (event) => {
        setDepositAmount(event.target.value);
    }
    const yesCreditCardRadioHandler = (event) => {
        if(event.target.value === 'yes'){
            setCreditCardNeeded(true);
        }
    }
    const noCreditCardRadioHandler = (event) => {
        if(event.target.value === 'no'){
            setCreditCardNeeded(false);
        }
    }
    const yesDebitCardRadioHandler = (event) => {
        if(event.target.value === 'yes'){
            setDebitCardNeeded(true);
        }
    }
    const noDebitCardRadioHandler = (event) => {
        if(event.target.value === 'no'){
            setDebitCardNeeded(false);
        }
    }



    
    const submitActionHandler = (event) => {
        var today = new Date().toISOString().substring(0,10)
        const status_msg_div = document.querySelector('.status_msg_div');
        event.preventDefault();
        axios.post(baseURL,{
            customer_details:{
            firstName : fname,
            lastName : lname,
            address : address,
            password : pass,
            email : email,
            age : age,
            gender : gender,
            mobileNumber : phno,
            },
            account_details:{
                depositAmount : parseInt(Number(depositAmount)),
                creditCardNeeded : creditCardNeeded,
                debitCardNeeded : debitCardNeeded,
            }
        })
        .then((response) => {
            status_msg_div.innerHTML = `<p class='success-msg'>${response}</p>`;
        }).catch(error => {
            status_msg_div.innerHTML = `<p class='error-msg'>${error}</p>`;
        });
    };

    return (
        <div>
        <CustomerNavbar />
            <div className="customer-registration-form">
        <form onSubmit={submitActionHandler}>
        <h2>Register</h2>
        <div className='status_msg_div'>
        </div>
            <div className="form-input-text-fields">
            <label>First Name</label>
            <input type="text" value={fname} onChange={fnameChangeHandler}></input>
            <label>Last Name</label>
            <input type="text" value={lname} onChange={lnameChangeHandler}></input>
            <label>Address</label>
            <input type="text" value={address} onChange={addressChangeHandler}></input>
            <label>Password</label>
            <input type="password" value={pass} onChange={passChangeHandler}></input>
            <label>Email Id</label>
            <input type="email" value={email} onChange={emailChangeHandler}></input>
            <label>Your Age</label>
            <input type="number" value={age} onChange={ageChangeHandler}></input>
            <label>Gender:</label>
            <input type="text" value={gender} onChange={genderChangeHandler}></input>
            <label>Phone Number</label>
            <input type="text" value={phno} onChange={phnoChangeHandler}></input>
            <label>Deposit Amount</label>
            <input min="10000" type="number" value={depositAmount} onChange={depositAmountChangeHandler}></input>
            </div>
            {/* Account Field Data */}
            <div className="account-data-main-div">
            <p>Need Credit Card</p>
           
           <label className="inline-label">Yes</label>
            <input type="radio" name="needCreditCard" value="yes" onChange={yesCreditCardRadioHandler}></input>
            <label className="inline-label">No</label>
            <input type="radio" name="needCreditCard" value="no" onChange={noCreditCardRadioHandler}></input>
            <p>Need Debit Card</p>
            <label>Yes</label>
            <input type="radio" name="needDebitCard" value="yes" onChange={yesDebitCardRadioHandler}></input>
            <label>No</label>
            <input type="radio" name="needDebitCard" value="no" onChange={noDebitCardRadioHandler}></input>
            </div>
            <button className="form-container-btn" type="submit">submit</button>
            <Link className="reg-login-link" to="/customer/login">Already have an account?</Link>
        </form>
        {/* <Footer /> */}
        </div>
        </div>
     
    );
};

export default RegisterUser;