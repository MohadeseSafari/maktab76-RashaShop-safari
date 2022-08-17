import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AppBar, Avatar, Box, Toolbar, Typography, Breadcrumbs, Chip, IconButton } from '@mui/material';
import { emphasize, styled } from '@mui/material/styles';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import logo from 'assets/image/logo/logo-1.svg';



const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor = theme.palette.mode === 'light'? '#142633e0': '#F4D5A9';
    const color =  theme.palette.mode === 'light'? '#F4D5A9': '#142633e0';
    return {
        backgroundColor,
         color,
        height: theme.spacing(4),
        fontWeight: 700,
        fontSize: '22px',
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function ManagementPanel() {
    return (
        <AppBar position="fixed" elevation={1} sx={{ background: 'white' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>

                <NavLink to='/' style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt='logo' src={logo} sx={{ ml: 1.5 }} />
                    <Typography color="secondary" variant='h4' component='h1'>مدیـریت فروشـگاه راشـــا</Typography>
                </NavLink>

                <Box sx={{ display: 'flex',justifyContent:'center' }}>
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <NavLink to='products'><StyledBreadcrumb label="کالاها" /></NavLink>
                            <NavLink to='quantity'><StyledBreadcrumb label="موجودی و قیمت ها" /></NavLink>
                            <NavLink to='orders'><StyledBreadcrumb label="سفارش ها" /></NavLink>
                        </Breadcrumbs>
                        <Outlet />
                    </div>
                </Box>
                <IconButton color="Error" >
                    <HomeRoundedIcon />
                </IconButton>

            </Toolbar>

        </AppBar>

    );
}