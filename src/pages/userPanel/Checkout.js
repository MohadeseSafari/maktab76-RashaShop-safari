import * as Yup from 'yup';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import { Box, Container, InputLabel, Stack, Grid, FormHelperText, Typography } from '@mui/material';
import { CustomInput, dateInput } from 'pages/managementPanel/loginForm/TextFieldLogin';
import { CustomButton } from 'pages/managementPanel/loginForm/ButtonLogin';
import NavbarLayout from 'layout/userLayout/navbar/NavbarLayout';
import DatePicker from "react-multi-date-picker";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import checkoutBackground from 'assets/image/background/Checkout-Background.jpg';

const initialValues = {
    username: '',
    lastName: '',
    address: '',
    phone: '',
    // expectAt: '',
    // delivered:'false'
}

const SignupSchema = Yup.object().shape({
    username: Yup.string().required('این فیلد نمی تواند خالی باشد'),
    lastName: Yup.string().required('این فیلد نمی تواند خالی باشد'),
    address: Yup.string().required('این فیلد نمی تواند خالی باشد'),
    phone: Yup.string().required('این فیلد نمی تواند خالی باشد')
})
function Checkout() {
    const [value,setValue]= useState('');

    const handelSubmit =(values, props) => {
        console.log("dfdfdfd")
        console.log(values)
        console.log("time",value)
        // props.resetForm();
        // window.open("http://localhost:3001")
    }


    return (
        <Container maxWidth sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${checkoutBackground})`, height: '100vh' }}>
            <NavbarLayout />
            <Container className='checkoutForm' >
                <Typography variant='h4'>نهایی کردن سبد خرید</Typography>
                <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handelSubmit} >
                    {(props) => (

                        <Form autoComplete='false' >
                            <Grid container rowSpacing={1}>
                                <Grid item xs={6}>
                                    <Box sx={{ display: 'flex' }}>
                                        <Stack direction='column'>
                                            <InputLabel sx={{ marginRight: '17px', marginTop: '10px' }} >نام</InputLabel>
                                            <CustomInput
                                                name='username'
                                                type='text'
                                                autocomplete='false'
                                                value={props.values.username}
                                                onChange={props.handleChange}
                                            />
                                            {props.errors.username ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.username}</FormHelperText>) : null}

                                        </Stack>
                                    </Box>
                                </Grid>

                                <Grid item xs={6}>
                                    <Box sx={{ display: 'flex' }}>
                                        <Stack direction='column'>
                                            <InputLabel sx={{ marginRight: '17px', marginTop: '10px' }}>نام خانوادگی</InputLabel>
                                            <CustomInput
                                                name='lastName'
                                                type='text'
                                                autocomplete='false'
                                                value={props.values.lastName}
                                                onChange={props.handleChange}
                                            />
                                            {props.errors.lastName ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.lastName}</FormHelperText>) : null}
                                        </Stack>
                                    </Box>
                                </Grid>

                                <Grid item xs={6}>
                                    <Box sx={{ display: 'flex' }}>
                                        <Stack direction='column'>
                                            <InputLabel sx={{ marginRight: '17px', marginTop: '10px' }}>آدرس</InputLabel>
                                            <CustomInput
                                                name='address'
                                                type='text'
                                                autocomplete='false'
                                                value={props.values.address}
                                                onChange={props.handleChange}
                                            />
                                            {props.errors.address ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.address}</FormHelperText>) : null}
                                        </Stack>
                                    </Box>
                                </Grid>

                                <Grid item xs={6}>
                                    <Box sx={{ display: 'flex' }}>
                                        <Stack direction='column'>
                                            <InputLabel sx={{ marginRight: '17px', marginTop: '10px' }}>تلفن همراه</InputLabel>
                                            <CustomInput
                                                name='phone'
                                                type='text'
                                                autocomplete='false'
                                                value={props.values.phone}
                                                onChange={props.handleChange}
                                            />
                                            {props.errors.phone ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.phone}</FormHelperText>) : null}
                                        </Stack>
                                    </Box>
                                </Grid>

                                <Grid item xs={6}>
                                    <Box sx={{ display: 'flex' }}>
                                        <Stack direction='column'>
                                            <InputLabel sx={{ marginRight: '17px', marginTop: '10px' }}>تاریخ تحویل</InputLabel>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    label="Basic example"
                                                    value={value}
                                                    onChange={(newValue) => {
                                                        console.log(newValue)
                                                        setValue(newValue);
                                                    }}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </LocalizationProvider>
                                            {props.errors.date ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.date}</FormHelperText>) : null}
                                        </Stack>
                                    </Box>
                                </Grid>

                            </Grid>
                            <CustomButton type='submit' sx={{ ml: 45, mt: 7 }} disabled={!props.isValid} >پرداخت</CustomButton>
                        </Form>
                    )}
                </Formik>
            </Container>
        </Container>
    );
}

export default Checkout;
// localhost:3000/root?result=success