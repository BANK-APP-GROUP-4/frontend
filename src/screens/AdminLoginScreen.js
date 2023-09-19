import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import Footer from "../components/Footer";

const SimpleLoginScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div style={{ background: "linear-gradient(to bottom, #0073e6, #0073e6)", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Container maxWidth="sm">
                <Box
                    sx={{
                        padding: "1rem",
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                    }}
                >
                    <Typography variant="h4" style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1.5rem" }}>
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            fullWidth
                            label="Username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                            color="primary"
                            sx={{ marginTop: "20px", width: "50%", margin: "20px auto", fontSize: "0.8rem" }}
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

export default SimpleLoginScreen;
