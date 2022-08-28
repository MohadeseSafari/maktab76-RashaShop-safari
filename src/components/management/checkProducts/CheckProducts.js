import { Box, Container, Table, TableHead, TableRow, TableBody, Typography } from '@mui/material';
import { Modal, style, Backdrop, DeliveryButton } from 'components/management/checkProducts/style';
import { StyledTableCell, StyledTableRow } from 'components/management/table/style';
import { BASE_URL_IMAGE } from 'config/api';

function CheckProducts({ open, handleClose, checkItem }) {
    const { id, username, lastname, address, phone, expectAt, createdAt, products } = checkItem;
    return (
        <Modal open={open} onClose={handleClose} components={{ Backdrop }}>
            
            <Box sx={style}>
                <Typography variant='h5'>نمایش سفارش</Typography>
                <Container>
                    <Typography>نام مشتری: {username} {lastname} </Typography>
                    <Typography>آدرس: {address}</Typography>
                    <Typography>تلفن: {phone}</Typography>
                    <Typography>زمان تحویل: {(new Date(expectAt)).toLocaleDateString('fa')}</Typography>
                    <Typography>زمان سفارش: {(new Date(createdAt)).toLocaleDateString('fa')}</Typography>
                </Container>

                <Table sx={{ borderColor: '5 px solid #537d97', mt: 3 }} >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell style={{ width: 20 }} align="center">تصویر</StyledTableCell>
                            <StyledTableCell style={{ width: 120 }} align="center">کالا</StyledTableCell>
                            <StyledTableCell style={{ width: 80 }} align="center">قیمت</StyledTableCell>
                            <StyledTableCell style={{ width: 60 }} align="center">تعداد</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody align='center'>
                        {checkItem.products ? (products.map((product) => {
                            const { id, name, price, count, image } = product;
                            return (
                                <StyledTableRow key={id}>
                                    <StyledTableCell sx={{ width: 20, justifyContent: 'center', padding: '8px 0px 0px 0px' }} align="center"><img style={{ width: '40%' }} src={`${BASE_URL_IMAGE}/${image[0]}`} alt="??" /></StyledTableCell>
                                    <StyledTableCell style={{ width: 120, fontSize: 20 }} align="center">{name}</StyledTableCell >
                                    <StyledTableCell style={{ width: 50, fontSize: 20 }} align="center">{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</StyledTableCell >
                                    <StyledTableCell style={{ width: 50, fontSize: 20 }} align="center">{count}</StyledTableCell >
                                </StyledTableRow>
                            )
                        })) : null}
                    </TableBody>
                    
                </Table>
                <DeliveryButton sx={{mt:2}}>تحویل شد</DeliveryButton>
            </Box>
        </Modal>

    );
}

export default CheckProducts;