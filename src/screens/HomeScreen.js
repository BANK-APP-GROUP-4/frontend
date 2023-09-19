import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid, Paper, Box } from "@mui/material";
import { LockOpen } from "@mui/icons-material";

const HomeScreen = () => {
    const isLoggedIn = localStorage.getItem("customer_token") ? true : false;

    return (
        <Container
            maxWidth="md"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                backgroundColor: "#f0f0f0",
            }}
        >
            <Paper
                elevation={0}
                style={{
                    padding: "20px",
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    textAlign: "center",
                    maxWidth: "600px",
                }}
            >
                <Typography variant="h3" style={{ fontStyle: "italic", fontWeight: "bold", color: "#007acc" }}>
                    Welcome to NeoFinTech
                </Typography>
            </Paper>
            <Box
                style={{
                    marginTop: "2rem",
                    alignSelf: "flex-end",
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
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "2rem" }}>
                {isLoggedIn ? (
                    <>
                        <Grid item>
                            <Button component={Link} to="/customer/dashboard" variant="contained" color="primary">
                                Dashboard
                            </Button>
                        </Grid>
                    </>
                ) : (
                    <>
                        <Grid item>
                            <Button component={Link} to="/customer/login" variant="contained" color="primary">
                                Login
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button component={Link} to="/customer/register" variant="outlined" color="primary">
                                Register
                            </Button>
                        </Grid>
                    </>
                )}
            </Grid>
        </Container>
    );
};

export default HomeScreen;
