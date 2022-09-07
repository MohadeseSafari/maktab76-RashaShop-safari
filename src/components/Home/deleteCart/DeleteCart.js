import { useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { Modal, style, Backdrop } from 'components/management/deleteProduct/style';
import { DeleteButton, UnDeleteButton } from 'components/management/deleteProduct/style';
import { removeFromCart } from 'redux/feature/cart/CartSlice';


function DeleteCart({ openDelete, handleCloseDelete, deletedProduct }) {
    const dispatch = useDispatch();
    
    const handelDeleteItemCart = ()=>{
        dispatch(removeFromCart(deletedProduct));
        handleCloseDelete();
    }

    return (
        <Modal open={openDelete} components={{ Backdrop }}>
            <Box sx={style}>
                <Typography variant='h5'>آیا مایل به حذف کردن این کالا هستید؟</Typography>

                <Box sx={{ mt: 2 }}>
                    <DeleteButton sx={{ mr: 2 }} onClick={handelDeleteItemCart}>بله</DeleteButton>
                    <UnDeleteButton onClick={handleCloseDelete} >انصراف</UnDeleteButton>
                </Box>
            </Box>
        </Modal>

    );
}

export default DeleteCart;