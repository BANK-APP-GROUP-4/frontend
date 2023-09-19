import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid, Paper } from "@mui/material";
import { LockOpen } from "@mui/icons-material";

const HomeScreen = () => {
    const isLoggedIn = localStorage.getItem("customer_token") ? true : false;

    return (
        <Container maxWidth="md" style={{ textAlign: "center", marginTop: "5rem" }}>
            <Paper elevation={3} style={{ padding: "20px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
                <Typography variant="h2">Welcome to NeoFinTech</Typography>
            </Paper>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: "2rem" }}>
                {isLoggedIn ? (
                    <>
                        <Grid item>
                            <Button component={Link} to="/customer/dashboard" variant="contained" color="primary">
                                Dashboard
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button component={Link} to="/admin/login" variant="contained" color="secondary" startIcon={<LockOpen />} >
                                Admin Login
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
