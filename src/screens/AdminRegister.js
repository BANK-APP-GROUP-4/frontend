import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import Footer from "../components/Footer";
import {AdminRegisterService} from '../actions/AdminActions';
import CustomerNavbar from "../components/CustomerNavbar";
const AdminLogin = () => {
    if (localStorage.getItem('admin_token')) {
        window.location.href = '/admin/dashboard';
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const resp = AdminRegisterService.adminRegister(email, password);
        resp.then((res) => {
            console.log(res);
            if (res === "Admin created successfully!") {
                alert("Register success");
                window.location.href = '/admin/login';
            } else {
                alert("Something went wrong");
            }
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div>
        <CustomerNavbar />
             <div
        style={{
            background: "linear-gradient(to bottom, #f0f8ff, #c2e9fb)",
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
        }}>
            <Container maxWidth="sm">
                <Box
                    sx={{
                        padding: "1rem",
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        top: "-50px",
                    }}
                >
                    <Typography variant="h3" style={{ fontWeight: "bold", marginBottom: "20px", marginTop: "20px" }}>
                        Register Admin
                    </Typography>
                    <form onSubmit={handleLogin}>
                    <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            sx={{ marginBottom: "1rem", width: "70%", height: "70%" }}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            sx={{ marginBottom: "1rem", width: "70%", height: "70%" }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="success"
                            sx={{ marginTop: "20px", width: "60%", margin: "20px auto", fontSize: "1rem" }}
                        >
                            Login
                        </Button>
                    </form>
                    <Typography variant="subtitle1" style={{ textAlign: "center" }}>
                        Already have an account? <Link to="/admin/login">Login</Link>
                    </Typography>
                </Box>
            </Container>
        </div>
        <Footer />
        </div>
    );
};

export default AdminLogin;