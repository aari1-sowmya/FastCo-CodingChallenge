import React from 'react';
import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';
import Logo from '../assets/logo.png';

const Header = ({ onLoginButtonClick }) => {

    const onButtonClick = (value) => {
        onLoginButtonClick(value)
    }

    return (
        <AppBar id="navbar" position="sticky" style={{ background: '#fff' }}>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box
                    component="img"
                    sx={{
                        height: 50, width: 100,
                    }}
                    alt="Logo"
                    src={Logo}
                />
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: '#fa4094' }}
                >
                    FastCo - CodingChallenge
                </Typography>
                <Button variant="contained" style={{ backgroundColor: '#293153' }} onClick={() => onButtonClick(true)}>Login</Button>
            </Toolbar>
        </AppBar >
    );
};

export default Header;