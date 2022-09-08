import * as Yup from 'yup';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import { Box, Container, InputLabel, Stack, Grid, FormHelperText, Typography } from '@mui/material';
import { CustomInput, dateInput } from 'pages/managementPanel/loginForm/TextFieldLogin';
import { CustomButton } from 'pages/managementPanel/loginForm/ButtonLogin';
import NavbarLayout from 'layout/userLayout/navbar/NavbarLayout';
import DatePicker from "react-multi-date-picker";
import opacity from "react-element-popper/animations/opacity"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon"
import checkoutBackground from 'assets/image/background/Checkout-Background.jpg';

const initialValues = {
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    expectAt: ''
}

const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('این فیلد نمی تواند خالی باشد'),
    lastName: Yup.string().required('این فیلد نمی تواند خالی باشد'),
    address: Yup.string().required('این فیلد نمی تواند خالی باشد'),
    phoneNumber: Yup.string().required('این فیلد نمی تواند خالی باشد')
})
function Checkout() {
    const handelSubmit = async (values, props) => {

        props.resetForm();
    }

    function CustomInputDate({ openCalendar, value, handleValueChange }) {
        console.log(value, "time")
        return (
            <input
                name='expectAt'
                style={dateInput}
                onFocus={openCalendar}
                value={value}
                onChange={handleValueChange}
            />
        )
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
                                                name='firstName'
                                                type='text'
                                                autocomplete='false'
                                                value={props.values.firstName}
                                                onChange={props.handleChange}
                                            />
                                            {props.errors.firstName ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.firstName}</FormHelperText>) : null}

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
                                                name='phoneNumber'
                                                type='text'
                                                autocomplete='false'
                                                value={props.values.phoneNumber}
                                                onChange={props.handleChange}
                                            />
                                            {props.errors.phoneNumber ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.phoneNumber}</FormHelperText>) : null}
                                        </Stack>
                                    </Box>
                                </Grid>

                                <Grid item xs={6}>
                                    <Box sx={{ display: 'flex' }}>
                                        <Stack direction='column'>
                                            <InputLabel sx={{ marginRight: '17px', marginTop: '10px' }}>تاریخ تحویل</InputLabel>
                                            <DatePicker
                                                animations={[
                                                    opacity({ from: 0.1, to: 1, duration: 1000 })
                                                ]}
                                                render={<CustomInputDate />}
                                                calendar={persian}
                                                locale={persian_fa}
                                                calendarPosition="bottom-center"
                                            />
                                            {props.errors.date ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.date}</FormHelperText>) : null}
                                        </Stack>
                                    </Box>
                                </Grid>

                            </Grid>
                            <CustomButton type='submit' sx={{ ml: 45, mt: 7 }} disabled={!props.isValid}>پرداخت</CustomButton>
                        </Form>
                    )}
                </Formik>
            </Container>
        </Container>
    );
}

export default Checkout;