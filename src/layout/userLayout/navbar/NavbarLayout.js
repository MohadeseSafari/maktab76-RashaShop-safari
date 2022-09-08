import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Avatar, Box, Toolbar, Typography, Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import LightTooltip from 'common/Tooltip';
import logo from 'assets/image/logo/logo-1.svg';

function NavbarLayout() {
    const { cartItems } = useSelector(state => state.cart);

    return (
        <AppBar position="fixed" elevation={1} sx={{ background: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>

                <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt='logo' src={logo} sx={{ mr: 1.5 }} />
                    <Typography color="secondary" variant='h4' component='h1'>فروشـگاه راشـــا</Typography>
                </Link>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link to='/management' >
                        <LightTooltip title="مدیریت">
                            <ManageAccountsOutlinedIcon color="secondary" sx={{ mr: 1, mt: 1, fontWeight: 100 }} />
                        </LightTooltip >
                    </Link>


                    <Link
                        to='/cart'
                        size="large"
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <LightTooltip title="سبد خرید">
                            <Badge badgeContent={cartItems.length} color="pink" >
                                <ShoppingCartOutlinedIcon color="secondary" sx={{ ml: 2, fontWeight: 100 }} />
                            </Badge>
                        </LightTooltip>
                    </Link>
                </Box>
            </Toolbar>

        </AppBar>
    )
}

export default NavbarLayout;