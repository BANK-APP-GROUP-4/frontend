import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid } from "@mui/material";
import { LockOpen } from "@mui/icons-material";

const HomeScreen = () => {
    const isLoggedIn = localStorage.getItem("customer_token") ? true : false;

    return (
        <Container maxWidth="md" style={{ textAlign: "center", border: "1px solid black", padding: "20px", marginTop: "5rem" }}>
            <Typography variant="h2">Welcome to the NeoFinTech Bank</Typography>
            <Grid container spacing={2} justifyContent="center">
                {isLoggedIn ? (
                    <Grid item>
                        <Button component={Link} to="/customer/dashboard" variant="contained" color="primary">
                            Dashboard
                        </Button>
                    </Grid>
                ) : (
                    <Grid item>
                        <Button component={Link} to="/customer/login" variant="contained" color="primary">
                            Login
                        </Button>
                    </Grid>
                )}
                <Grid item>
                    <Button component={Link} to="/customer/register" variant="outlined" color="primary">
                        Register
                    </Button>
                </Grid>
            </Grid>
            <Button
                component={Link}
                to="/admin/login"
                variant="contained"
                color="secondary"
                style={{ position: "absolute", top: "20px", right: "20px" }}
                startIcon={<LockOpen />}
            >
                Admin Login
            </Button>
        </Container>
    );
};

export default HomeScreen;
