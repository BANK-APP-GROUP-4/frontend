import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid, Paper, Box } from "@mui/material";
import { LockOpen } from "@mui/icons-material";

const HomeScreen = () => {
    const isLoggedIn = localStorage.getItem("customer_token") ? true : false;

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
                maxWidth="xl"
                style={{
                    backgroundColor: "#fff", // White background
                    borderRadius: "10px",
                    textAlign: "center",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)", // Subtle shadow
                    width: "75%", // 75% of the page width
                    maxWidth: "800px", // Maximum width for content
                    padding: "40px",
                }}
            >
                <Typography
                    variant="h3"
                    style={{
                        fontStyle: "italic",
                        fontWeight: "bold",
                        color: "#333", // Dark gray text color
                        marginBottom: "20px",
                    }}
                >
                    Welcome to NeoFinTech
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {isLoggedIn ? (
                        <Grid item>
                            <Button
                                component={Link}
                                to="/customer/dashboard"
                                variant="contained"
                                color="primary"
                            >
                                Dashboard
                            </Button>
                        </Grid>
                    ) : (
                        <>
                            <Grid item>
                                <Button
                                    component={Link}
                                    to="/customer/login"
                                    variant="contained"
                                    color="primary"
                                >
                                    Login
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    component={Link}
                                    to="/customer/register"
                                    variant="outlined"
                                    color="primary"
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
                    top: "20px", // Adjust the top position as needed
                    right: "20px", // Adjust the right position as needed
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
