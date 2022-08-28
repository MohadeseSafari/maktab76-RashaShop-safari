//import Redux
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
// import Material UI components
import { Button, Box, Typography, Table, TableHead, TableBody, TableContainer, TableRow, Paper, TablePagination } from '@mui/material';
import { StyledTableCell, tableStyle, StyledTableRow, SaveButton } from 'components/management/table/style';
import { fetchProducts } from 'redux/feature/products/ProductsSlice';
import { BASE_URL_IMAGE } from 'config/api';


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

        // currentPage = 0;
    };

    return (
        <div style={tableStyle}>
            <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
                <Typography color="#537d97" variant='h4' sx={{ mb: 3, mr: 130 }}>مدیریت کالاها</Typography>
                <SaveButton>افزودن کالا</SaveButton>
            </Box>
            <TableContainer component={Paper} sx={{ width: '55%', mb: 10 }} align='center'  >
                <Table sx={{ borderColor: '5 px solid #537d97' }} >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell sx={{ width: '5%' }} align="right">ردیف</StyledTableCell>
                            <StyledTableCell sx={{ width: '10%' }} align="right">تصویر</StyledTableCell>
                            <StyledTableCell sx={{ width: '30%' }} align="center">نام کالا</StyledTableCell>
                            <StyledTableCell sx={{ width: '30%' }} align="center">دسته بندی</StyledTableCell>
                            <StyledTableCell sx={{ width: '40%' }} align="center">بررسی محصولات</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {products.length ? (products.map(({ id, name, genre, image }) => (
                            <StyledTableRow key={id} >
                                <StyledTableCell sx={{ width: '5%' }} align="center" size='small'>{id + 1}</StyledTableCell>
                                <StyledTableCell sx={{ width: '10%', justifyContent: 'center', padding: '8px 0px 0px 0px' }} align="center"><img style={{ width: '60%' }} src={`${BASE_URL_IMAGE}/${image[0]}`} alt="??" /></StyledTableCell>
                                <StyledTableCell sx={{ width: '30%' }} align="center">{name}</StyledTableCell>
                                <StyledTableCell sx={{ width: '35%' }} align="center">{(genre).map((item, index) => (<span key={index}>{item}&nbsp;</span>))}</StyledTableCell>
                                <StyledTableCell sx={{ width: '40%' }} align="center"><div style={{ display: 'flex',alignItems:'center' }}><Button variant='text'>ویرایش</Button>/<Button variant='text'>حذف</Button></div></StyledTableCell>
                            </StyledTableRow>
                        ))) : null}
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
        </div>
    );
}






