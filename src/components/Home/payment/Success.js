import { Container, Typography, Button, Box } from '@mui/material';
import { useEffect } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useDispatch } from 'react-redux';
import { createOrder } from 'redux/feature/orders/OrdersSlice';

function Success() {
    let arrayOfProducts = [];
    const dispatch = useDispatch();

    useEffect(() => {
        const productsLocalStorage = JSON.parse(localStorage.getItem("cartItems"));
        const order = JSON.parse(localStorage.getItem("personInfo"));
        const products = productsLocalStorage.map((product) => {
            const { name, image, price, count, id } = product;
            let orderProduct = { id, name, image, count, price };
            arrayOfProducts.push(orderProduct)
            return arrayOfProducts
        })

        order.products = products;
        dispatch(createOrder(order))

        localStorage.clear();
    }, [])
    return (
        <Container sx={{ mt: 10 }}>
            <Typography variant="h4">نتیجه پرداخت</Typography>
            <Box sx={{ display: 'flex' }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 50, color: "#3EC158", mx: 2 }} />
                <Typography variant="h5" sx={{ mt: 1 }}> با تشکر از پرداخت شما،سفارش شما ثبت شده و جهت هماهنگی ارسال با شما تماس گرفته خواهد شد.</Typography>
            </Box>
        </Container>
    );
}

export default Success;