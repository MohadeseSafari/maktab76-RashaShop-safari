import { BASE_URL_IMAGE } from "config/api";
import { Container, Box, Paper, Typography, Divider, Chip, Stack, TextField } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import { increase} from 'redux/feature/cart/CartSlice';
import { CustomButton, AddButton, DecreaseButton } from 'common/AddButton';
import { customInput, StyledBreadcrumb } from 'components/Home/cartTable/style';
import delivery from 'assets/image/background/delivery.jpg';
import Book from 'assets/image/background/Book.gif';
import GppGoodIcon from '@mui/icons-material/GppGood';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Logo from "assets/image/logo/logo-1.png";
import { useDispatch } from "react-redux";
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
                setCount(cartItem[0].count)
            }
        }


    }, [])

    const { id, name, image, author, translator, publication, description, genre, price, off, quantity } = data

    const handelAddToCart = (data) => {
        dispatch(increase({ data, count }))
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
                    <Typography variant="h5" color="secondary" sx={{ mb: 1, fontSize: 35 }}>???????? {name} ?????? {author} ?????? {publication}</Typography>
                    <Divider />

                    <Typography variant="h6" color="secondary" sx={{ mt: 1, fontSize: 30, fontWeight: 900 }}>?????????? ????</Typography>
                    <ul>
                        <li>
                            <Typography variant="h6" color="#A5A8AD" sx={{ fontSize: 22 }}>?????? : <span style={{ color: 'black' }}>????????</span> </Typography>
                        </li>

                        <li>
                            <Typography variant="h6" color="#A5A8AD" sx={{ fontSize: 22 }}>?????? ?????? : <span style={{ color: 'black' }}>??????????</span> </Typography>
                        </li>

                        <li>
                            <Stack direction="row" spacing={1} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'baseline' }}>

                                <Typography variant="h6" color="#A5A8AD" sx={{ fontSize: 22 }}>???????? ???????? :</Typography>
                                {genre.map((item) => <Chip label={item} sx={{ fontSize: 17, fontWeight: 700 }} />)}

                            </Stack>
                        </li>
                    </ul>

                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <Paper sx={{ p: 2, display: 'flex', justifyContent: 'space-between', borderRadius: 2 }}>
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 900 }} >???????? ???????????????????? ????????</Typography>
                        </Box>
                        <img width="100px" src={Book} />
                    </Paper>

                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <Paper sx={{ p: 2, display: 'flex', justifyContent: 'space-between', borderRadius: 2 }}>
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 900 }} >?????????? ????????????</Typography>
                            <Typography>???????? ?????????? ?????????? 500 ???????? ??????????</Typography>
                        </Box>
                        <img width="100px" src={delivery} />
                    </Paper>



                </Box>

                <Paper elevation={3} sx={{ p: 2, backgroundColor: "#F7F7F8" }} >
                    <Typography variant="h5" color="secondary" sx={{ fontSize: 32 }}>??????????????</Typography>
                    <Divider />

                    <Box sx={{ mb: 2 }} >
                        <Box sx={{ display: 'flex', p: 1, alignItems: 'center' }}>
                            <img width="30px" src={Logo} alt="" />
                            <Typography variant="h5" color="secondary">?????????? ????????</Typography>
                            <StyledBreadcrumb label="??????????" />
                        </Box>
                        <Box sx={{ display: 'flex', ml: 3 }}>
                            <Typography>???????????? </Typography>
                            <Typography color="#A12C34" sx={{ ml: 1 }}>????????</Typography>
                        </Box>

                    </Box>
                    <Divider />

                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, px: 2, mb: 1 }}>
                        <GppGoodIcon sx={{ fontSize: 25, color: "#A5A8AD", mr: 1 }} />
                        <Typography sx={{ fontSize: 20 }}>?????????????? ?????????? ?? ?????????? ???????????? ????????</Typography>
                    </Box>
                    <Divider />

                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, px: 2, mb: 1 }}>
                        <StorefrontIcon sx={{ fontSize: 25, color: "#A5A8AD", mr: 1 }} />
                        <Typography sx={{ fontSize: 25 }}>?????????? ???? ?????????? ?????????????? ??????????</Typography>
                    </Box>
                    <Divider />

                    <Typography color="#A5A8AD" sx={{ fontSize: 20 }}>???????? ???????? ??????????</Typography>
                    <Box sx={{ display: 'flex', ml: 25 }}>
                        {off > 0 ? <Typography color="#A5A8AD" sx={{ fontSize: 20, mr: 1, textDecoration: "line-through" }}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ??????????</Typography> : ''}
                        {off > 0 ? <Chip label={`${off}%`} color="error" sx={{ fontSize: 22, fontWeight: 700 }} /> : ''}
                    </Box>
                    <Box>
                        {count < quantity ?

                            <Box>
                                <AddButton onClick={() => handelIncrease({ data, count })}>+</AddButton>
                                <input value={count} style={customInput} />
                                <DecreaseButton onClick={() => handelDecrease({ data, count })}>-</DecreaseButton>
                            </Box>
                            :
                            <>
                                <AddButton disabled onClick={() => handelIncrease({ data, count })}>+</AddButton>
                                <input value={count} style={customInput} />
                                <DecreaseButton disabled onClick={() => handelDecrease({ data, count })}>-</DecreaseButton>
                            </>
                        }
                    </Box>
                    {off > 0 ? <Typography variant="h6" align="right" color="secondary" sx={{ fontSize: 30 }}>{((price - ((price * off) / 100))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}<Typography variant="caption" sx={{ fontSize: 15 }}>?????????? </Typography></Typography> : <Typography variant="h6" align="end" color="secondary" sx={{ fontSize: 30 }}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}<Typography variant="caption" sx={{ fontSize: 15 }}>?????????? </Typography></Typography>}

                    <CustomButton variant="contained" onClick={() => handelAddToCart(data)} >???????????? ???? ??????</CustomButton>
                </Paper >
            </Box>


            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" color="secondary" sx={{ mt: 1, fontSize: 25, fontWeight: 900, borderBottom: '2px solid #f65d4e', width: 120 }}>?????????? ???? ????????</Typography>
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






