import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import logo from '../../assets/image/logo-1.svg';

function NavbarLayout() {
    return (
        <AppBar position="fixed" elevation={1} sx={{ background: 'white' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>

                <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt='logo' src={logo} sx={{ ml: 1.5 }} />
                    <Typography color="secondary" variant='h4' component='h1'>فروشـگاه راشـــا</Typography>
                </Link>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>

                    <Link to='/management' color="secondary">
                        <ManageAccountsIcon sx={{ ml: 1, fontWeight: 300 }} />
                    </Link>

                    <Link
                        to='/cart'
                        size="large"
                        color="secondary"
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <ShoppingCartRoundedIcon sx={{ mr: 2, fontWeight: 300 }} />
                    </Link>
                </Box>
            </Toolbar>

        </AppBar>
    )
}

export default NavbarLayout;