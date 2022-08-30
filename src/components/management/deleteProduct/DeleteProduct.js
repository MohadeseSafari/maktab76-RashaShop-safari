import { Box, Button, IconButton, Typography } from '@mui/material';
import { Modal, style, Backdrop } from 'components/management/deleteProduct/style';
import { DeleteButton, UnDeleteButton } from 'components/management/deleteProduct/style';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { deleteProduct } from 'redux/feature/products/ProductsSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function DeleteProducts({ openDelete, handleCloseDelete, id }) {
    const dispatch = useDispatch();

    const handelDeleteItem = () => {
        dispatch(deleteProduct(id));
        handleCloseDelete();
    }

    return (
        <Modal open={openDelete} components={{ Backdrop }}>
            <Box sx={style}>
                {/* 
                <IconButton component="label" onClick={handleCloseDelete} sx={{ ml: 42 }}>
                    <HighlightOffOutlinedIcon sx={{ fontSize: 17 }} />
                </IconButton> */}

                <Typography variant='h5'>آیا مایل به حذف کردن این کالا هستید؟</Typography>

                <Box sx={{ mt: 2 }}>
                    <DeleteButton sx={{ mr: 2 }} onClick={handelDeleteItem}>بله</DeleteButton>
                    <UnDeleteButton onClick={handleCloseDelete} >انصراف</UnDeleteButton>
                </Box>
            </Box>
        </Modal>

    );
}

export default DeleteProducts;