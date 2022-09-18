//import Redux
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
// import Material UI components
import { Button, Box, Typography, Table, TableHead, TableBody, TableContainer, TableRow, Paper, TablePagination, PaginationItem } from '@mui/material';
import { StyledTableCell, tableStyle, StyledTableRow, SaveButton } from 'components/management/table/style';
import { fetchProducts } from 'redux/feature/products/ProductsSlice';
import { BASE_URL_IMAGE } from 'config/api';

import EditModal from 'components/management/editModal/EditModal';
import DeleteProducts from 'components/management/deleteProduct/DeleteProduct';
import CreateModal from 'components/management/createModal/CreateModal';
import 'styles/style.css';
import Spinner from 'common/Spinner';

import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ProductsTable() {

    const dispatch = useDispatch();
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [product, setProduct] = useState({});
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openCreate, setOpenCreate] = useState(false);
    const [id, setId] = useState(0);



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

    const handelOpenModalEdit = (id) => {
        const selectedProduct = products.filter((product) => product.id === parseInt(id));
        console.log(selectedProduct[0])
        setProduct(selectedProduct[0]);
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handelOpenDelete = (id) => {
        setId(id);
        setOpenDelete(true);
    }

    const handleCloseDelete = () => {
        setOpenDelete(false);
    }

    const handelOpenCreate = () => {
        setOpenCreate(true)
    }

    const handelCloseCreate = () => {
        setOpenCreate(false)
    }

    return (
        <div className="directionPagination" style={tableStyle}>

            <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
                <Typography color="#537d97" variant='h4' sx={{ mb: 3, mr: 50 }}>مدیریت کالاها</Typography>
                <SaveButton onClick={handelOpenCreate}>افزودن کالا</SaveButton>
            </Box>
            {loading ? (<Spinner />) : <TableContainer component={Paper} sx={{ width: '70%', mb: 10 }} align='center'  >
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
                        {products ? (products.map((product) => {
                            const { id, name, genre, image } = product;
                            return (
                                <StyledTableRow key={id} >
                                    <StyledTableCell sx={{ width: '5%' }} align="center" size='small'>{id + 1}</StyledTableCell>
                                    <StyledTableCell sx={{ width: '10%', justifyContent: 'center', padding: '8px 0px 0px 0px' }} align="center"><img style={{ width: '60%' }} src={`${BASE_URL_IMAGE}/${image[image.length - 1]}`} alt="??" /></StyledTableCell>
                                    <StyledTableCell sx={{ width: '30%' }} align="center">{name}</StyledTableCell>
                                    <StyledTableCell sx={{ width: '35%' }} align="center">{(genre).map((item, index) => (<span key={index}>{item}&nbsp;</span>))}</StyledTableCell>
                                    <StyledTableCell sx={{ width: '40%' }} align="center"><div style={{ display: 'flex', alignItems: 'center' }}><Button variant='text' onClick={() => handelOpenModalEdit(id)}>ویرایش</Button>/<Button variant='text' onClick={() => handelOpenDelete(id)}>حذف</Button></div></StyledTableCell>
                                </StyledTableRow>
                            )
                        })) : null}
                        <EditModal openEdit={openEdit} handleCloseEdit={handleCloseEdit} product={product} rowsPerPage={rowsPerPage} />
                        <DeleteProducts openDelete={openDelete} handleCloseDelete={handleCloseDelete} id={id} rowsPerPage={rowsPerPage} />
                        <CreateModal openCreate={openCreate} handelCloseCreate={handelCloseCreate} />
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
                        renderItem={(item) => (
                            <PaginationItem
                                components={{ next: ArrowForwardIosIcon, previous: ArrowBackIos }}
                                {...item}
                            />
                        )}
                    />
            
            </TableContainer>}

        </div>
    );
}






