import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import NavbarLayout from 'layout/userLayout/navbar/NavbarLayout';
import { getTotals } from 'redux/feature/cart/CartSlice';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { CustomInput, PaymentButton, containerCheckoutForm } from 'pages/userPanel/checkout/style';
import { Box, Container, InputLabel, Stack, Grid, FormHelperText, Typography, TextField } from '@mui/material';

const initialValues = {
    username: '',
    lastname: '',
    address: '',
    phone: '',
    expectAt: "",
    createdAt: "",
    prices: 0,
    delivered: 'false'
}

const SignupSchema = Yup.object().shape({
    username: Yup.string().min(2, 'فیلد نام نمی تواند کمتر از 2 حرف باشد').required('این فیلد نمی تواند خالی باشد'),
    lastname: Yup.string().required('این فیلد نمی تواند خالی باشد'),
    address: Yup.string().required('این فیلد نمی تواند خالی باشد'),
    phone: Yup.string().required('این فیلد نمی تواند خالی باشد')
})
function Checkout() {
    const dispatch = useDispatch();
    const CartTotalAmount = useSelector(state => state.cart.CartTotalAmount);
    useEffect(() => {
        dispatch(getTotals())
    }, [])


    const [selectedDay, setSelectedDay] = useState(null);

    const renderCustomInput = ({ ref }) => (
        <input
            readOnly
            ref={ref}
            name='expectAt'
            value={selectedDay ? `${selectedDay.year}/${selectedDay.month}/${selectedDay.day}` : ""}
            style={{
                width: '20rem',
                padding: '7px 22px',
                background: 'inherit',
                lineHeight: 1,
                flexGrow: 1,
                margin: 5,
                fontSize: '1.5rem',
                border: '1px solid #A0AAB4',
                borderRadius: '18px',
                outline: 'none',
                fontFamily: "BKamran"
            }}
        />
    )

    const handelSubmit = (values, props) => {
        values.expectAt = `${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`;
        values.prices = CartTotalAmount;
        console.log(values)
        localStorage.setItem("personInfo", JSON.stringify(values))
        window.open("http://localhost:3001", '_blank')
        props.resetForm();
        setSelectedDay(null)
    }


    return (
        <Container maxWidth >
            <NavbarLayout />

            <Container sx={{ mt: 15 }} >
                <Box style={containerCheckoutForm}></Box>
                <Box sx={{ width: '80%' }} >
                    <Typography variant='h4'>نهایی کردن سبد خرید</Typography>
                    <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handelSubmit} >
                        {(props) => (

                            <Form autoComplete='false' >

                                <Grid container rowSpacing={1} columnSpacing={1} >
                                    <Grid item xs={12} md={6} sx={{ maxHeight: 125 }}>
                                        <Box sx={{ display: 'flex' }}>
                                            <Stack direction='column'>
                                                <InputLabel>نام</InputLabel>
                                                <CustomInput
                                                    name='username'
                                                    type='text'
                                                    autoComplete='false'
                                                    value={props.values.username}
                                                    onChange={props.handleChange}
                                                />
                                                {props.errors.username ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.username}</FormHelperText>) : null}

                                            </Stack>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} md={6} sx={{ maxHeight: 125 }}>
                                        <Box sx={{ display: 'flex' }}>
                                            <Stack direction='column' >
                                                <InputLabel sx={{ marginRight: '17px' }}>تاریخ تحویل</InputLabel>
                                                <DatePicker
                                                    renderInput={renderCustomInput}
                                                    value={selectedDay}
                                                    onChange={setSelectedDay}
                                                    shouldHighlightWeekends
                                                    inputPlaceholder="یک روز را انتخاب کنید..."
                                                    calendarPopperPosition='bottom'
                                                    locale="fa"
                                                />
                                                {props.errors.expectAt ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.expectAt}</FormHelperText>) : null}
                                            </Stack>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} md={6} sx={{ maxHeight: 125 }}>
                                        <Box sx={{ display: 'flex' }}>
                                            <Stack direction='column' >
                                                <InputLabel sx={{ marginRight: '17px' }}>نام خانوادگی</InputLabel>
                                                <CustomInput
                                                    name='lastname'
                                                    type='text'
                                                    autoComplete='false'
                                                    value={props.values.lastname}
                                                    onChange={props.handleChange}
                                                />
                                                {props.errors.lastname ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.lastname}</FormHelperText>) : null}
                                            </Stack>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} md={6} sx={{ maxHeight: 125 }}>
                                        <Box sx={{ display: 'flex' }}>
                                            <Stack direction='column' >
                                                <InputLabel sx={{ marginRight: '17px' }}>تلفن همراه</InputLabel>
                                                <CustomInput
                                                    name='phone'
                                                    type='text'
                                                    autoComplete='false'
                                                    value={props.values.phone}
                                                    onChange={props.handleChange}
                                                />
                                                {props.errors.phone ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.phone}</FormHelperText>) : null}
                                            </Stack>
                                        </Box>
                                    </Grid>


                                    <Grid item xs={12} md={12} sx={{ maxHeight: 170 }}>
                                        <Box sx={{ display: 'flex' }}>
                                            <Stack direction='column'>
                                                <InputLabel sx={{ marginRight: '17px' }}>آدرس</InputLabel>
                                                <TextField
                                                    name='address'
                                                    type='text'
                                                    multiline
                                                    rows={3}
                                                    sx={{ width: '20rem', background: 'inherit' }}
                                                    value={props.values.address}
                                                    onChange={props.handleChange}
                                                />
                                                {props.errors.address ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.address}</FormHelperText>) : null}
                                            </Stack>
                                        </Box>
                                    </Grid>

                                    <Box sx={{ maxHeight: 200, ml: 50, mt: 7, display: 'flex' }}>
                                        <PaymentButton type='submit' disabled={!props.isValid} >پرداخت</PaymentButton >
                                    </Box>

                                </Grid>

                            </Form>
                        )}
                    </Formik>
                </Box>
            </Container>
        </Container>
    );
}

export default Checkout;
