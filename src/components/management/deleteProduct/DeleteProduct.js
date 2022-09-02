import { Box,Typography } from '@mui/material';
import { Modal, style, Backdrop } from 'components/management/deleteProduct/style';
import { DeleteButton, UnDeleteButton } from 'components/management/deleteProduct/style';
import { fetchProducts } from 'redux/feature/products/ProductsSlice';
import { deleteProduct } from 'redux/feature/products/ProductsSlice';
import { useDispatch } from 'react-redux';


function DeleteProducts({ openDelete, handleCloseDelete, id , rowsPerPage }) {
    const dispatch = useDispatch();

    const handelDeleteItem = () => {
        dispatch(deleteProduct(id));
        handleCloseDelete();
        dispatch(fetchProducts({ currentPage: 1, limitPages: rowsPerPage }))
    }

    return (
        <Modal open={openDelete} components={{ Backdrop }}>
            <Box sx={style}>
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