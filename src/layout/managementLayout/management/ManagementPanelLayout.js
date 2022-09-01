import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AppBar, Avatar, Container, Typography, Breadcrumbs, Chip, IconButton } from '@mui/material';
import { emphasize, styled } from '@mui/material/styles';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import logo from 'assets/image/logo/logo-1.png';



const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor = theme.palette.mode === 'light' ? '#142633e0' : '#F4D5A9';
    const color = theme.palette.mode === 'light' ? '#F4D5A9' : '#142633e0';
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

}

export default function ManagementPanelLayout() {
    const navigate = useNavigate()
    return (
        <Container maxWidth='xl' sx={{ display: 'flex' }}>
            <AppBar elevation={0} sx={{ background: 'transparent', position: 'absolute' }}>
                <div role="presentation" onClick={handleClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    <NavLink to='/' style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar alt='logo' src={logo} sx={{ background: 'transparent' }} />
                        <Typography color="secondary" variant='h4' component='h1'>مدیـریت فروشـگاه راشـــا</Typography>
                    </NavLink>

                    <Breadcrumbs sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <NavLink to='products'><StyledBreadcrumb label="کالاها" /></NavLink>
                        <NavLink to='quantity'><StyledBreadcrumb label="موجودی و قیمت ها" /></NavLink>
                        <NavLink to='orders'><StyledBreadcrumb label="سفارش ها" /></NavLink>
                    </Breadcrumbs>

                    <IconButton color="Error" onClick={() => navigate('/')}  >
                        <HomeRoundedIcon />
                    </IconButton>


                </div> <Outlet />
            </AppBar>
        </Container>

    );
}