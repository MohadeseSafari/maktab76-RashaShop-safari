import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, Toolbar, Typography, Badge, IconButton, AppBar } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import LightTooltip from 'common/Tooltip';
import logo from 'assets/image/logo/logo-1.svg';


const NavbarLayout = (props) => {
    const { handelOpenMenu } = props
    const { cartItems } = useSelector(state => state.cart);

    return (

        <AppBar position="fixed" elevation={1} sx={{ background: 'white' }}>
            <Toolbar sx={{ flexDirection: 'column' }}>


                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

                    <Box sx={{ display: 'flex' }}>
                        <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar alt='logo' src={logo} sx={{ mr: 1.5 }} />
                            <Typography color="secondary" variant='h4' component='h1'>فروشـگاه راشـــا</Typography>
                        </Link>

                    </Box>


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
                                <Badge badgeContent={cartItems.length} color="pink"  >
                                    <ShoppingCartOutlinedIcon color="secondary" sx={{ ml: 2, fontWeight: 100 }} />
                                </Badge>
                            </LightTooltip>
                        </Link>


                    </Box>

                </Box>

                {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
                    <IconButton
                        color="secondary"
                        onClick={handelOpenMenu}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography color="secondary">دسته بندی کالا</Typography>

                </Box> */}
            </Toolbar>
        </AppBar>


    )
}

export default NavbarLayout;