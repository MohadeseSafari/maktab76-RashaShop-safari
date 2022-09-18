import { Container, Button, Box, Typography, Table, TableHead, TableBody, TableContainer, TableRow, Paper } from '@mui/material';
import { StyledTableCell, tableStyle, StyledTableRow, AddButton, customInput, FinalButton, DeleteAllButton } from 'components/Home/cartTable/style';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { decreaseCart, addToCart, clearCart,getTotals } from 'redux/feature/cart/CartSlice';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteCart from '../deleteCart/DeleteCart';
import AddIcon from '@mui/icons-material/Add';
import { BASE_URL_IMAGE } from 'config/api';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'





function CartTable() {
    const dispatch = useDispatch();
    const [openDelete, setOpenDelete] = useState(false);
    const [deletedProduct, setDeletedProduct] = useState({});
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getTotals())
    }, [cart])

    const handelOpenDeleteModal = (product) => {
        setOpenDelete(true);
        setDeletedProduct(product)
    }

    const handleCloseDelete = () => {
        setOpenDelete(false)
    }

    const handelDecreaseCart = (product) => {
        dispatch(decreaseCart(product))
    }

    const handelIncreaseCart = (product) => {
        dispatch(addToCart(product))
    }
    return (
        <div style={tableStyle}>

            {cart.cartItems.length === 0 ? (<Box sx={{ mt: 10 }}><Typography>سبد خرید شما خالی است</Typography><Link to="/"><Button variant='text' endIcon={<KeyboardBackspaceIcon sizw='small' />}> شروع خرید</Button></Link></Box>) :
                <TableContainer elevator={0} sx={{ width: '70%', mt: 10 }} align='center'  >
                    <Table sx={{ borderColor: '5 px solid #537d97' }} >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell sx={{ width: '5%' }} align="center">تصویر</StyledTableCell>
                                <StyledTableCell sx={{ width: '20%' }} align="center">محصول</StyledTableCell>
                                <StyledTableCell sx={{ width: '10%' }} align="center">قیمت</StyledTableCell>
                                <StyledTableCell sx={{ width: '30%' }} align="center"> تعداد</StyledTableCell>
                                <StyledTableCell sx={{ width: '20%' }} align="center"> مجموع قیمت</StyledTableCell>
                                <StyledTableCell sx={{ width: '15%' }} align="center"> </StyledTableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {cart.cartItems.length ? (cart.cartItems?.map((product) => {
                                const { id, name, price, off, image, count } = product;
                                return (
                                    <StyledTableRow key={id} >
                                        <StyledTableCell sx={{ width: '5%' }} align="center" size='small'><Link to={`/book/${id}`}><img style={{ width: 80 }} src={`${BASE_URL_IMAGE}/${image[image.length - 1]}`} alt="??" /></Link></StyledTableCell>
                                        <StyledTableCell sx={{ width: '20%' }} align="center">{name}</StyledTableCell>

                                        {off > 0 ? <StyledTableCell sx={{ width: '15%' }} align="center">{(price - ((price * off) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} تومان</StyledTableCell> : <StyledTableCell sx={{ width: '15%' }} align="center">{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} تومان</StyledTableCell>}
                                        <StyledTableCell sx={{ width: '30%' }} align="center" >
                                            <Container>
                                                <AddButton onClick={() => handelDecreaseCart(product)} ><RemoveIcon fontSize="5" /></AddButton>

                                                <input value={count} style={customInput} />

                                                <AddButton onClick={() => handelIncreaseCart(product)}><AddIcon fontSize="5" /></AddButton>
                                            </Container>
                                        </StyledTableCell>

                                        {off > 0 ? <StyledTableCell sx={{ width: '20%' }} align="center">{((price - ((price * off) / 100)) * count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} تومان</StyledTableCell> : <StyledTableCell sx={{ width: '20%' }} align="center">{(price * count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} تومان</StyledTableCell>}
                                        <StyledTableCell sx={{ width: '15%' }} align="center"><Button onClick={() => handelOpenDeleteModal(product)}>حذف</Button></StyledTableCell>
                                    </StyledTableRow>
                                )
                            })) : null}
                        </TableBody>
                    </Table>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "flex-start", my: 5 }}>

                        <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#E4E8E8', p: 4, mr: 50 }}>
                            <Typography color="secondary" variant="h5" sx={{ mb: 2 }}>مجموع قیمت:</Typography>
                            <Typography>{cart.CartTotalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
                            <Link to='/cart/checkout'><FinalButton>نهایی کردن سبد خرید</FinalButton></Link>
                            <Link to="/"><Button sx={{ ml: 18, mt: 2 }} endIcon={<KeyboardBackspaceIcon sizw='small' />}>ادامه خرید</Button></Link>
                        </Paper >

                        <DeleteAllButton onClick={() => dispatch(clearCart())}>پاک کردن سبد خرید</DeleteAllButton>
                    </Box>
                    <DeleteCart openDelete={openDelete} handleCloseDelete={handleCloseDelete} deletedProduct={deletedProduct} />
                </TableContainer>}


        </div>
    );
}

export default CartTable;