import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import Footer from "../components/Footer";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div
        style={{
            background: "linear-gradient(to bottom, #f0f8ff, #c2e9fb)",
            minHeight: "100vh",
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
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                    
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
                </Box>
                <Footer />
            </Container>
        </div>
    );
};

export default AdminLogin;