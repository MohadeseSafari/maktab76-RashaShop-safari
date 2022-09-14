import { Container, Typography, Box } from '@mui/material';
import { useEffect } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useDispatch } from 'react-redux';
import { createOrder } from 'redux/feature/orders/OrdersSlice';
import SuccessPayment from 'assets/image/background/success-Payment.png'

function Success() {

    const dispatch = useDispatch();

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem("cartItems"));
        const order = JSON.parse(localStorage.getItem("personInfo"));

        // order.products = products;
        // dispatch(createOrder(order))

        // localStorage.clear();
    }, [])
    return (
        <Container sx={{ mt: 10, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h4">نتیجه پرداخت</Typography>
            <Box sx={{ display: 'flex' }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 50, color: "#3EC158", mx: 2 }} />
                <Typography variant="h5" sx={{ mt: 1 }}> با تشکر از پرداخت شما،سفارش شما ثبت شده و جهت هماهنگی ارسال با شما تماس گرفته خواهد شد.</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img width="400px" src={SuccessPayment} alt="success payment" />
            </Box>

        </Container>
    );
}

export default Success;