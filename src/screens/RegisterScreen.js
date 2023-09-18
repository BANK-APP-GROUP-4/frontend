import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { styled } from 'styled-components';
const RegisterUser= () => {
    const config = {

        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            "Access-Control-Allow-Origin" : "http://localhost:3001/register",
            "Allow": "POST",
            "Content-type": "Application/json",
    
        
        }
    };
    const baseURL = "http://localhost:8081/api/v1/customer/add";
    const navigate = useNavigate();
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [address,setAddress] = useState('');
    const [pass,setPass] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');
    const [gender,setGender] = useState('');
    const [phno,setPhno] = useState('');
    

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

    
    const submitActionHandler = (event) => {
        var today = new Date().toISOString().substring(0,10)
        console.log(today)
        event.preventDefault();
        axios.post(baseURL,{
            firstName : fname,
            lastName : lname,
            address : address,
            password : pass,
            email : email,
            age : age,
            gender : gender,
            mobileNumber : phno,
            dateBecameCustomer : today
        })
        .then((response) => {
            alert("Customer " + fname  + " added !");
            // navigate("/account");
        }).catch(error => {
            alert("error==="+error);
        });
    };

    return (
        <Container>
        <div className="auth-form">
        <h2>Register</h2>
        <Form className="register-form" onSubmit={submitActionHandler}>
            <Label>First Name:</Label>
            <Input type="text" value={fname} onChange={fnameChangeHandler}></Input>
            
            <Label>Last name:</Label>
            <Input type="text" value={lname} onChange={lnameChangeHandler}></Input>
            
            <Label>Address:</Label>
            <Input type="text" value={address} onChange={addressChangeHandler}></Input>
            
            <Label>Password:</Label>
            <Input type="password" value={pass} onChange={passChangeHandler}></Input>
            
            <Label>Email:</Label>
            <Input type="email" value={email} onChange={emailChangeHandler}></Input>
            
            <Label>Age:</Label>
            <Input type="number" value={age} onChange={ageChangeHandler}></Input>
            
            <Label>Gender:</Label>
            <Input type="text" value={gender} onChange={genderChangeHandler}></Input>
            
            <Label>Phone Number:</Label>
            <Input type="text" value={phno} onChange={phnoChangeHandler}></Input>
            <br></br>
            <FormButton type="submit">Register</FormButton>
            <br></br>
            <div>
                <Link to="/customer/login">Already have an account? Login here.</Link>
            </div>
        </Form>
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
const Label=styled.label`
text-align: left;
  padding: 0.25rem 0;

`;
export default RegisterUser;
