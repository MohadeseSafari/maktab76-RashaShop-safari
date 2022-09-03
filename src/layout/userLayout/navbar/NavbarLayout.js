import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LightTooltip from 'common/Tooltip';
import logo from 'assets/image/logo/logo-1.svg';

function NavbarLayout() {
    return (
        <AppBar position="fixed" elevation={1} sx={{ background: 'white', zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>

                <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt='logo' src={logo} sx={{ mr: 1.5 }} />
                    <Typography color="secondary" variant='h4' component='h1'>فروشـگاه راشـــا</Typography>
                </Link>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link to='/management' >
                        <LightTooltip title="مدیریت">
                            <ManageAccountsIcon color="secondary" sx={{ mr: 1, fontWeight: 300 }} />
                        </LightTooltip >
                    </Link>


                    <Link
                        to='/cart'
                        size="large"
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <LightTooltip title="سبد خرید">
                            <ShoppingCartRoundedIcon color="secondary" sx={{ ml: 2, fontWeight: 300 }} />
                        </LightTooltip>
                    </Link>
                </Box>
            </Toolbar>

        </AppBar>
    )
}

export default NavbarLayout;