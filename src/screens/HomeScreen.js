import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid, Paper, Box } from "@mui/material";
import { LockOpen } from "@mui/icons-material";

const HomeScreen = () => {
    const isLoggedIn = localStorage.getItem("customer_token") ? true : false;
    const [animationText, setAnimationText] = useState("");
    const welcomeText = "Welcome to NeoFin Bank";

    useEffect(() => {
        const textInterval = setInterval(() => {
            if (welcomeText.length > animationText.length) {
                setAnimationText(welcomeText.slice(0, animationText.length + 1));
            } else {
                clearInterval(textInterval);
            }
        }, 200); // Adjust the speed of animation here (in milliseconds)

        return () => clearInterval(textInterval);
    }, [animationText]);

    return (
        <div
            style={{
                background: "linear-gradient(to bottom, #f0f8ff, #c2e9fb)",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Container
                maxWidth="lg"
                style={{
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    textAlign: "center",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                    width: "80%",
                    maxWidth: "800px",
                    padding: "40px",
                    position: "relative",
                    top: "-100px", // Shifted down by 100px
                    height: "calc(100% + 100px)", // Increased height by 100px
                }}
            >
                <Typography
                    variant="h2" // Increased font size by 2 sizes
                    style={{
                        
                        fontWeight: "bold",
                        color: "#000",
                        marginBottom: "50px", // Increased space between text and buttons
                    }}
                >
                    <i>{animationText}</i>
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {isLoggedIn ? (
                        <Grid item xs={12}>
                            <Button
                                component={Link}
                                to="/customer/dashboard"
                                variant="contained"
                                color="primary"
                                size="large" // Increased button size
                            >
                                Dashboard
                            </Button>
                        </Grid>
                    ) : (
                        <>
                            <Grid item xs={12}>
                                <Button
                                    component={Link}
                                    to="/customer/login"
                                    variant="contained"
                                    color="primary"
                                    size="large" // Increased button size
                                    style = {{width: "50%"}}
                                >
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    component={Link}
                                    to="/customer/register"
                                    variant="outlined"
                                    color="primary"
                                    size="large" // Increased button size
                                    style = {{width: "50%"}}
                                >
                                    Register
                                </Button>
                            </Grid>
                        </>
                    )}
                </Grid>
            </Container>
            <Box
                style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                }}
            >
                <Button
                    component={Link}
                    to="/admin/login"
                    variant="contained"
                    color="secondary"
                    startIcon={<LockOpen />}
                >
                    Admin Login
                </Button>
            </Box>
        </div>
    );
};

export default HomeScreen;
