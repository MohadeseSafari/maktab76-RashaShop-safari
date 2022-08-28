//import Redux
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Typography, Table, TableHead, TableBody, TableContainer, TablePagination, TableRow, Paper, Box } from '@mui/material';
import { StyledTableCell, tableStyle, StyledTableRow, SaveButton } from 'components/management/table/style';
import { fetchProducts } from 'redux/feature/products/ProductsSlice';


export default function QuantityTable() {
    const dispatch = useDispatch();
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { products, currentPage, loading, totalCount } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts({ currentPage: 1, limitPages: rowsPerPage }))
    }, [rowsPerPage])


    const handleChangePage = (event, newPage) => {
        dispatch(fetchProducts({ currentPage: newPage + 1, limitPages: rowsPerPage }))
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
    };

    return (
        <div style={tableStyle}>

            <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
                <Typography color="#537d97" variant='h4' sx={{ mr: 110 }}>مدیریت موجودی و کالاها</Typography>
                <SaveButton>ذخیره</SaveButton>
            </Box>

            <TableContainer component={Paper} sx={{ width: '50%' }} align='center' >
                <Table sx={{ borderColor: '5 px solid #537d97' }} >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell sx={{ width: '10%' }} align="right">ردیف</StyledTableCell>
                            <StyledTableCell sx={{ width: '30%' }} align="left">نام کالا</StyledTableCell>
                            <StyledTableCell sx={{ width: '30%' }} align="center">قیمت</StyledTableCell>
                            <StyledTableCell sx={{ width: '30%' }} align="center">موجودی</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {products.map(({ id, name, price, quantity }) => (
                            <StyledTableRow key={id}>
                                <StyledTableCell sx={{ width: '10%' }} align="center">{id + 1} </StyledTableCell>
                                <StyledTableCell sx={{ width: '30%' }} align="left"> {name}</StyledTableCell>
                                <StyledTableCell sx={{ width: '30%' }} align="center">{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</StyledTableCell>
                                <StyledTableCell sx={{ width: '30%' }} align="center">{quantity}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
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

        </div>
    );
}


