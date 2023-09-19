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
                textAlign: "center",
                marginTop: "5rem",
                position: "relative", // To position the admin button
            }}
        >
            <Paper
                elevation={0} // Remove shadow
                style={{
                    padding: "20px",
                    backgroundColor: "#ffffff",
                }}
            >
                <Typography variant="h2" style={{ fontStyle: "italic", fontWeight: "bold", color: "red" }}>
                    Welcome to NeoFinTech
                </Typography>
            </Paper>
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
