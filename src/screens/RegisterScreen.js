import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Box,
} from "@mui/material";
import axios from "axios";

const RegisterUser = () => {
    const baseURL = "http://localhost:8081/api/v1/customer/add";
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        password: "",
        age: "",
        email: "",
        gender: "",
        mobileNumber: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const today = new Date().toISOString().substring(0, 10);
        axios
            .post(baseURL, {
                ...formData,
                dateBecameCustomer: today,
            })
            .then((response) => {
                alert("Customer " + formData.firstName + " added!");
                // navigate("/account");
            })
            .catch((error) => {
                alert("error === " + error);
            });
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    marginTop: "2rem",
                    padding: "1rem",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                }}
            >
                <Typography variant="h4">Register</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Age"
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Phone Number"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ marginTop: "1rem" }}
                    >
                        Submit
                    </Button>
                </form>
                <div style={{ marginTop: "1rem", textAlign: "center" }}>
                    <Link to="/">Home</Link>
                </div>
            </Box>
        </Container>
    );
};

export default RegisterUser;
