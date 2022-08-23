//import Redux
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
// import Material UI components
import { Typography, Table, TableHead, TableBody, TableCell, TableContainer, TableFooter, TableRow, Paper } from '@mui/material';

import { StyledTableCell, tableStyle } from 'components/management/table/quantity/style';
import PaginationActions from 'components/management/pagination/PaginationActions';

import { fetchProducts } from 'redux/feature/products/ProductsSlice';

export default function QuantityTable() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products)
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);



    useEffect(() => {
        dispatch(fetchProducts({ start: 0, end: 5, currentPage: 0 }))
    }, [])

    return (
        <div style={tableStyle}>

            <Typography color="#537d97" variant='h4' sx={{ mb: 3, ml: 130 }}>مدیریت کالاها</Typography>
            <TableContainer component={Paper} sx={{ width: "60%" }}>
                <Table sx={{ borderColor: '5 px solid #537d97' }} >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell style={{ width: 30 }} align="center">تصویر</StyledTableCell>
                            <StyledTableCell style={{ width: 100 }} align="right">نام کالا</StyledTableCell>
                            <StyledTableCell style={{ width: 100 }} align="center">دسته بندی</StyledTableCell>
                            <StyledTableCell style={{ width: 60 }} align="center"></StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell style={{ width: 30, fontSize: 20 }} align="center"></TableCell>
                                <TableCell style={{ width: 120, fontSize: 20 }} align="right">{product.name}</TableCell>
                                <TableCell style={{ width: 50, fontSize: 20 }} align="center">{(product.genre).map((item, index) => (<span key={index}>{item}&nbsp;</span>))}</TableCell>
                                <TableCell style={{ width: 50, fontSize: 20 }} align="center">حذف / ویرایش</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    {/* <TableFooter>
                        <PaginationActions
                            colSpan={3}
                            count={products.length}
                            rowsPerPage={rowsPerPage}
                            products={products}
                            currentPage={currentPage}
                            fetchProducts={fetchProducts} ActionsComponent={PaginationActions} />
                    </TableFooter> */}

                </Table>
            </TableContainer>
        </div>
    );
}


