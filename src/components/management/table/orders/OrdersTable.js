import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from 'api/index';
import { Typography, Table, TableHead, TableBody, TableCell, TableContainer, TableFooter, TableRow, Paper } from '@mui/material';
import { StyledTableCell, tableStyle } from 'components/management/table/quantity/style';
import OrdersPagination from 'components/management/pagination/OrdersPagination';

export default function QuantityTable() {
    const [orders, setOrders] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);


    useEffect(() => {
        fetchOrders(0, 5, 0);
    }, [])

    const fetchOrders = async (start, end, increase) => {
        return await axios.get(`${BASE_URL}/orders?_start=${start}&_end=${end}`)
            .then(response => {
                setOrders(response.data)
                setCurrentPage(currentPage + increase)
            })
    }

    return (
        <div style={tableStyle}>
            <Typography color="#537d97" variant='h4' sx={{ mb: 3, ml: 130 }}>مدیریت سفارشات</Typography>
            <TableContainer component={Paper} sx={{ width: "50%" }}>
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
                            const { username, lastname, prices, expectAt } = order;
                           
                            return (
                                <TableRow key={order.id}>
                                    <TableCell style={{ width: 80, fontSize: 20 }} align="center">{username} {lastname}</TableCell>
                                    <TableCell style={{ width: 50, fontSize: 20 }} align="center">{prices}</TableCell>
                                    <TableCell style={{ width: 80, fontSize: 20 }} align="center">{(new Date(expectAt)).toLocaleDateString('fa')}</TableCell>
                                    <TableCell style={{ width: 50, fontSize: 20 }} align="center">بررسی سفارشات</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>

                    <TableFooter>
                        <OrdersPagination
                            colSpan={3}
                            count={orders.length}
                            rowsPerPage={rowsPerPage}
                            orders={orders}
                            currentPage={currentPage}
                            fetchOrders={fetchOrders} ActionsComponent={OrdersPagination} />
                    </TableFooter>

                </Table>
            </TableContainer>
        </div>
    );
}


