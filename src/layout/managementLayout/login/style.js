import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const NavbarLoginButton = styled(Button)(() => ({
    width: 140,
    padding: '5px 10px',
    borderRadius: '20px',
    backgroundColor: '#F47974',
    marginTop:'10px',
    '&:hover': {
        backgroundColor: '#C63E3E',
    },
}));

export default NavbarLoginButton;

