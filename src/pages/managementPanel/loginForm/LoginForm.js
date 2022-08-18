import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, InputLabel, Stack } from '@mui/material';
//import common components
import { CustomInput, InputAdornment, IconButton } from 'pages/managementPanel/loginForm/TextFieldLogin';
import { CustomButton } from 'pages/managementPanel/loginForm/ButtonLogin';
// import icons
import PersonIcon from '@mui/icons-material/Person';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
//import background
import LoginBackground from 'assets/image/background/Login-Background.jpg';
import 'styles/style.css';



function LoginForm() {

    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword, });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };



    return (
        <Container maxWidth='xl' sx={{ backgroundImage: `url(${LoginBackground})`, height: '100vh' }}>
            <form className="loginForm" >

                <h1 className="start">
                    <span className="end1"></span><span className="middle1">مدیریت</span>
                    <span className="middle2"></span><span className="end2">راشــا</span>
                </h1>
                <Box sx={{ display: 'flex' }}>
                    <Stack direction='column'>
                        <InputLabel sx={{ marginRight: '17px', marginTop: '10px' }} >نام کاربری</InputLabel>
                        <CustomInput
                            endAdornment={
                                <InputAdornment>
                                    <IconButton><PersonIcon sx={{ fontSize: 25 }} /></IconButton>
                                </InputAdornment>
                            }
                        />
                    </Stack>
                </Box>

                <Box sx={{ display: 'flex' }}>
                    <Stack direction='column'>
                        <InputLabel sx={{ marginRight: '17px', marginTop: '10px' }}>رمز عبور</InputLabel>
                        <CustomInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment>
                                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                        {values.showPassword ? <VisibilityOffOutlinedIcon sx={{ fontSize: 25 }} /> : <VisibilityOutlinedIcon sx={{ fontSize: 25 }} />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </Stack>
                </Box>


                <Link to='/management'><CustomButton>ورود</CustomButton></Link>

            </form>
        </Container>
    );
}

export default LoginForm;