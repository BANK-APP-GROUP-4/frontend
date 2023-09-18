

import React, { useEffect, useState } from "react";
import {map} from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import { Router, useNavigate } from "react-router-dom";


const Transaction = () => {
    const baseURL = "http://localhost:8080";
    const customer_details = JSON.parse(localStorage.getItem('customer_details'));
    const userId=1234;
    const navigate = useNavigate();
    const [transTypeOpn, setTransType] = useState("");
    const [accFromOpn, setAccFrom] = useState("");
    const [accOptions, setAccOptions] = useState([]);
    const [transaction, setTransaction] = useState({
        accFrom: "",
        accTo: "",
        amount: 0,
        
    });
    const accOptionsChangeHandler = (event) => {
        setAccOptions(event.target.value);
    };
    useEffect(() => {
        axios
            .get(`${baseURL}/fetchAccounts/${userId}`)
            .then((res) => {
                setAccOptions(res.data.map((obj) => obj.accno));
            })
            .catch((err) => {
                toast.error("No accounts found!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    }, []);
    useEffect(() => {
        setTransaction((prev) => ({
            ...prev,
            accFrom: accFromOpn,
            
        }));
    }, [accFromOpn]);

    const submitFormHandler = (e) => {
        e.preventDefault();
        axios
            .post(`${baseURL}/transact`, transaction)
            .then((res) => {
                if (res.data === "Transaction Success") {
                    toast.success("Funds Transferred Successfully!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setTimeout(() => {
                        navigate("/");  //mod
                    }, 2000);
                } else {
                    toast.error("Transaction failed!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
            .catch((e) => {
                console.log(e);
                toast.error(`Error: ${e.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    };
    return (
        <Container>
        <div className="transfer-form">
                <Form onSubmit={submitFormHandler}>
                <h2>Money Transfer</h2>
                 <Input
                placeholder={`${userId}`}
                type= "text"
                autoComplete="off"
                onChange={(e) =>
                    setTransaction({ ...transaction, [userId]: e.target.value })
                }/>
                <br></br>
                <Select
                value={accFromOpn}
                onChange={(e) => {
                    setAccFrom(e.target.value);
                }}
            >
                <option style={{ display: "none" }} value="" selected>
                    Select Account
                </option>
                {accOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </Select>
                <br></br>
                <Input
                placeholder="Reciever's Account Number"
                type= "text"
                autoComplete="off"
                onChange={(e) =>
                    setTransaction({ ...transaction, ["accTo"]: e.target.value })
                }/>
               
                <br></br>
                <Input
                placeholder="Amount"
                type= "text"
                autoComplete="off"
                onChange={(e) =>
                    setTransaction({ ...transaction, ["amount"]: e.target.value })
                }/>
                <br></br>
                <FormButton className="forms-button">Transfer</FormButton>
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
export default Transaction;