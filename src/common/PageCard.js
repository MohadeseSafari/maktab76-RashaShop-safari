import { Container, Box, Paper, Typography, Divider, Chip, Stack, TextField } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import { increase, addToCart, decrease } from 'redux/feature/cart/CartSlice';
import { CustomButton, AddButton, DecreaseButton } from 'common/AddButton';
import { customInput } from 'components/Home/cartTable/style';
import { BASE_URL_IMAGE } from "config/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

function PageCard({ data }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (localStorage.getItem("cartItems")) {
            const IndexCartItem = JSON.parse(localStorage.getItem("cartItems")).findIndex((item) => item.id === data.id);
            if (IndexCartItem === -1) {
                setCount(0)
            } else {
                const cartItem = JSON.parse(localStorage.getItem("cartItems")).filter((item) => item.id === data.id)
                setCount(cartItem[0].cartQuantity)
            }
        }


    }, [])

    const { id, name, image, author, translator, publication, description, genre, price, off } = data

    const handelAddToCart = (data) => {

        dispatch(increase({ data, count }));
        dispatch(decrease({ data, count }))
        navigate('/cart');
    }

    const handelIncrease = ({ data, count }) => {
        setCount(count + 1);
    }


    const handelDecrease = ({ data, count }) => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            setCount(0)
        }
    }
    return (
        <Container sx={{ mt: 15, mb: 15 }}>

            <Box sx={{ display: 'flex', flexDirection: 'row' }}>

                <Carousel style={{ width: '240px' }}>{image.map((item, i) => <Item key={i} item={item} />)}</Carousel>

                <Box sx={{ ml: 5, mr: 5 }}>
                    <Typography variant="h5" color="secondary" sx={{ mb: 1, fontSize: 35 }}>کتاب {name} اثر {author} نشر {publication}</Typography>
                    <Divider />

                    <Typography variant="h6" color="secondary" sx={{ mt: 1, fontSize: 30, fontWeight: 900 }}>ویژگی ها</Typography>
                    <ul>
                        <li>
                            <Typography variant="h6" color="#A5A8AD" sx={{ fontSize: 22 }}>قطع : <span style={{ color: 'black' }}>رقعی</span> </Typography>
                        </li>

                        <li>
                            <Typography variant="h6" color="#A5A8AD" sx={{ fontSize: 22 }}>نوع جلد : <span style={{ color: 'black' }}>شومیز</span> </Typography>
                        </li>

                        <li>
                            <Stack direction="row" spacing={1} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'baseline' }}>

                                <Typography variant="h6" color="#A5A8AD" sx={{ fontSize: 22 }}>دسته بندی :</Typography>
                                {genre.map((item) => <Chip label={item} sx={{ fontSize: 17, fontWeight: 700 }} />)}

                            </Stack>
                        </li>
                    </ul>

                    <Divider sx={{ mt: 2 }} />
                </Box>

                <Paper elevation={3} sx={{ p: 3, backgroundColor: "#F7F7F8" }} >
                    <Typography variant="h6" color="secondary" sx={{ fontSize: 27 }}>فروشنده</Typography>
                    <Typography color="#A5A8AD" sx={{ fontSize: 20 }}>قیمت مصرف کننده</Typography>
                    <Box sx={{ display: 'flex', ml: 25 }}>
                        {off > 0 ? <Typography color="#A5A8AD" sx={{ fontSize: 20, mr: 1, textDecoration: "line-through" }}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} تومان</Typography> : ''}
                        {off > 0 ? <Chip label={`${off}%`} color="error" sx={{ fontSize: 22, fontWeight: 700 }} /> : ''}
                    </Box>
                    <Box>
                        <AddButton onClick={() => handelIncrease({ data, count })}>+</AddButton>
                        <input value={count} style={customInput} />
                        <DecreaseButton onClick={() => handelDecrease({ data, count })}>-</DecreaseButton>
                    </Box>
                    {off > 0 ? <Typography variant="h6" align="right" color="secondary" sx={{ fontSize: 30 }}>{((price - ((price * off) / 100))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}<Typography variant="caption" sx={{ fontSize: 15 }}>تومان </Typography></Typography> : <Typography variant="h6" align="end" color="secondary" sx={{ fontSize: 30 }}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}<Typography variant="caption" sx={{ fontSize: 15 }}>تومان </Typography></Typography>}

                    <CustomButton variant="contained" onClick={() => handelAddToCart(data)} >افزودن به سبد</CustomButton>
                </Paper >
            </Box>


            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" color="secondary" sx={{ mt: 1, fontSize: 25, fontWeight: 900, borderBottom: '2px solid #f65d4e', width: 120 }}>قسمتی از کتاب</Typography>
                <Typography variant="h6" color="secondary" sx={{ mt: 1, fontSize: 20, fontWeight: 700 }}><div dangerouslySetInnerHTML={{ __html: description }} /></Typography>
            </Box>
        </Container>
    );
}

function Item({ item }) {
    return (
        <Paper style={{ width: 240 }}>

            <img style={{ width: 240 }} src={`${BASE_URL_IMAGE}/${item}`} />

        </Paper>
    )
}

export default PageCard;





