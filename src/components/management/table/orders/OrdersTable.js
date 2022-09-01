import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Radio, RadioGroup, FormControlLabel, Typography, Table, TableHead, TableBody, TableContainer, TablePagination, TableRow, FormControl } from '@mui/material';
import { StyledTableCell, tableStyle, StyledTableRow, headerTable } from 'components/management/table/style';
import { fetchOrders } from 'redux/feature/orders/OrdersSlice';
import Spinner from 'common/Spinner';
import CheckProducts from 'components/management/checkProducts/CheckProducts';

export default function QuantityTable() {
    const dispatch = useDispatch();
    const { orders, loading, currentPage, totalCount } = useSelector((state) => state.orders)
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [status, setStatus] = useState('_');
    const [open, setOpen] = useState(false);
    const [checkItem, setCheckItem] = useState({})

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
    };

    const handelFilterOrders = (event) => {
        setStatus(event.target.value);

    }

    const handelOpen = (order) => {
        setCheckItem(order)
        setOpen(true);
    }

    const handleClose = () => setOpen(false);


    return (
        <>
            <div style={tableStyle}>
                <Box sx={headerTable}>
                    <Typography color="#537d97" variant='h4' sx={{ mr: 10 }}>مدیریت سفارشات</Typography>
                    <FormControl name="radio-buttons-group">
                        <RadioGroup sx={{ flexDirection: 'row', display: 'block' }} value={status} onClick={handelFilterOrders}>
                            <FormControlLabel sx={{ color: '#537d97' }} control={<Radio value='_' sx={{ '& .MuiSvgIcon-root': { fontSize: 14 } }} />} label="همه" />
                            <FormControlLabel sx={{ color: '#537d97' }} control={<Radio value={'=true'} sx={{ '& .MuiSvgIcon-root': { fontSize: 14 } }} />} label="سفارش های تحویل شده" />
                            <FormControlLabel sx={{ color: '#537d97' }} control={<Radio value={'=false'} sx={{ '& .MuiSvgIcon-root': { fontSize: 14 } }} />} label="سفارش های در انتظار ارسال" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <TableContainer sx={{ pl: 13, pr: 15, mt: 4, mb: 4 }} >
                    <Table sx={{ borderColor: '5 px solid #537d97' }} >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell style={{ width: 20 }} align="center">شماره</StyledTableCell>
                                <StyledTableCell style={{ width: 80 }} align="center">نام کاربر</StyledTableCell>
                                <StyledTableCell style={{ width: 50 }} align="right">مجموع سفارشات</StyledTableCell>
                                <StyledTableCell style={{ width: 80 }} align="center">زمان ثبت سفارشات</StyledTableCell>
                                <StyledTableCell style={{ width: 60 }} align="center">بررسی سفارشات</StyledTableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody align='center'>
                            {loading ? (<Spinner />) : (orders.map((order) => {
                                const { id, username, lastname, prices, expectAt } = order;

                                return (
                                    <StyledTableRow key={id}>
                                        <StyledTableCell style={{ width: 80, fontSize: 20 }} align="center">{id + 1}</StyledTableCell >
                                        <StyledTableCell style={{ width: 80, fontSize: 20 }} align="center">{username} {lastname}</StyledTableCell >
                                        <StyledTableCell style={{ width: 50, fontSize: 20 }} align="center">{prices.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</StyledTableCell >
                                        <StyledTableCell style={{ width: 80, fontSize: 20 }} align="center">{(new Date(expectAt)).toLocaleDateString('fa')}</StyledTableCell >
                                        <StyledTableCell style={{ width: 50, fontSize: 20 }} align="center"><Button variant='text' onClick={() => handelOpen(order)}>بررسی سفارشات</Button></StyledTableCell >
                                    </StyledTableRow>
                                )

                            }))}
                            <CheckProducts open={open} handleClose={handleClose} checkItem={checkItem} status={status} rowsPerPage={rowsPerPage} />
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

        </>
    );
}


