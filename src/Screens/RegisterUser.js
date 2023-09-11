import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import axios from "axios";
const RegisterUser= () => {
    // const baseURL = "http://localhost:9080/saveUser" - need to confirm localhost
    // const navigate = useNavigate();
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


    // const submitActionHandler = (event) => {

    //     event.preventDefault();
    //     axios.post(baseURL,{
    //         firstName : fname,
    //         lastname : lname,
    //         address : address,
    //         password : pass,
    //         email : email,
    //         age : age,
    //         gender : gender,
    //         phonenumber : phno
    //     })
    //     .then((response) => {
    //         alert(response.data.fname);
    //         alert("Customer" + fname  + "added");
    //         navigate("/account");
    //     }).catch(error => {
    //         alert("error==="+error);
    //     });
    // };

    return (
        <form>
            <label>fname:</label>
            <input type="text" value={fname} onChange={fnameChangeHandler}></input>
            <br></br>
            <label>lname:</label>
            <input type="text" value={lname} onChange={lnameChangeHandler}></input>
            <br></br>
            <label>Address:</label>
            <input type="text" value={address} onChange={addressChangeHandler}></input>
            <br></br>
            <label>password:</label>
            <input type="password" value={pass} onChange={passChangeHandler}></input>
            <br></br>
            <label>email:</label>
            <input type="email" value={email} onChange={emailChangeHandler}></input>
            <br></br>
            <label>age:</label>
            <input type="number" value={age} onChange={ageChangeHandler}></input>
            <br></br>
            <label>Gender:</label>
            <input type="text" value={gender} onChange={genderChangeHandler}></input>
            <br></br>
            <label>phonenumber:</label>
            <input type="text" value={phno} onChange={phnoChangeHandler}></input>

            <button type="submit"></button>
        </form>
    );
};

export default RegisterUser;