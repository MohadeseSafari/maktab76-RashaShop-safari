import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Radio, RadioGroup, FormControlLabel, Typography, Table, TableHead, TableBody, TableContainer, TablePagination, TableRow, Paper } from '@mui/material';
import { StyledTableCell, tableStyle, StyledTableRow } from 'components/management/table/style';
import { fetchOrders } from 'redux/feature/orders/OrdersSlice';

export default function QuantityTable() {
    const dispatch = useDispatch();
    const { orders, loading, currentPage, totalCount } = useSelector((state) => state.orders)
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [status, setStatus] = useState('false');


    useEffect(() => {
        dispatch(fetchOrders({ delivered: status, currentPage: currentPage, limitPages: rowsPerPage }))
    }, [rowsPerPage])

    useEffect(() => {
        dispatch(fetchOrders({ delivered: status, currentPage: 1, limitPages: rowsPerPage }))
    }, [status])

    const handleChangePage = (event, newPage) => {
        dispatch(fetchOrders({ delivered: status, currentPage: newPage + 1, limitPages: rowsPerPage }))
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);

        // currentPage = 0;
    };

    const handelFilterOrders = (event) => {
        const deliveredStatus = event.target.value;

        console.log(deliveredStatus)
        setStatus(deliveredStatus);
    }

    console.log(status)

    return (
        <div style={tableStyle}>
            <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
                <Typography color="#537d97" variant='h4' sx={{ mb: 3, mr: 80 }}>مدیریت سفارشات</Typography>

                <FormControlLabel sx={{ color: '#537d97' }} value='true' control={<Radio color='primary' sx={{ '& .MuiSvgIcon-root': { fontSize: 14 } }} onClick={handelFilterOrders} />} label="سفارش های تحویل شده" />
                <FormControlLabel sx={{ color: '#537d97' }} value='false' control={<Radio color='error' sx={{ '& .MuiSvgIcon-root': { fontSize: 14 } }} onClick={handelFilterOrders} />} label="سفارش های در انتظار ارسال" />

            </Box>
            <TableContainer component={Paper} sx={{ width: "50%", mb: 5 }} align='center'>
                <Table sx={{ borderColor: '5 px solid #537d97' }} >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell style={{ width: 80 }} align="center">نام کاربر</StyledTableCell>
                            <StyledTableCell style={{ width: 50 }} align="right">مجموع سفارشات</StyledTableCell>
                            <StyledTableCell style={{ width: 80 }} align="center">زمان ثبت سفارشات</StyledTableCell>
                            <StyledTableCell style={{ width: 60 }} align="center">بررسی سفارشات</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {orders.map((order) => {
                            const { id, username, lastname, prices, expectAt } = order;
                            return (
                                <StyledTableRow key={id}>
                                    <StyledTableCell style={{ width: 80, fontSize: 20 }} align="center">{username} {lastname}</StyledTableCell >
                                    <StyledTableCell style={{ width: 50, fontSize: 20 }} align="center">{prices.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</StyledTableCell >
                                    <StyledTableCell style={{ width: 80, fontSize: 20 }} align="center">{(new Date(expectAt)).toLocaleDateString('fa')}</StyledTableCell >
                                    <StyledTableCell style={{ width: 50, fontSize: 20 }} align="center"><Button variant='text'>بررسی سفارشات</Button></StyledTableCell >
                                </StyledTableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <TablePagination
                    sx={{ border: 'unset' }}
                    rowsPerPageOptions={[5, 10, 25]}
                    labelDisplayedRows={({ from, to, count }) => `${from}-${to} از ${count}`}
                    count={totalCount}
                    rowsPerPage={rowsPerPage}
                    page={currentPage - 1}
                    showFirstButton
                    showLastButton
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </div >
    );
}


