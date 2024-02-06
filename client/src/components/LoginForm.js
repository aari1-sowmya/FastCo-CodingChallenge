import React, { useState } from 'react';
import { Button, Box, Typography, TextField, Modal, Card, Link } from '@mui/material';
import axios from "axios";


const LoginForm = ({ openLoginModal, setOpenLoginModal }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/login", {
                email,
                password
            });
            console.log("User Logged In Successfully:", response.data);
            setOpenLoginModal(false)
            return response
        }
        catch (error) {
            console.log("User Failed To Logged In", error);
        }
    }

    return (
        <Modal
            open={openLoginModal}
        >
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Card sx={{ padding: 3 }}>
                    <Typography component="h1" variant="h5" align="center">
                        Welcome
                    </Typography>
                    <Typography align="center">
                        Let's get you signed in.
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            LOGIN
                        </Button>
                        <Typography align="center">
                            Do you have an account ?
                            <Link href="#" >
                                Sign Up
                            </Link>
                        </Typography>
                    </Box>
                </Card>
            </Box>
        </Modal>
    );
};

export default LoginForm;