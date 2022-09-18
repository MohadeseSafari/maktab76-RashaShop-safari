//import Redux
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import { Typography, Table, TableHead, TableBody, TableContainer, TablePagination, TableRow, TextField, Paper, Box } from '@mui/material';
import { StyledTableCell, tableStyle, StyledTableRow, SaveButton } from 'components/management/table/style';
import { fetchProducts, updateQuantityPriceProduct } from 'redux/feature/products/ProductsSlice';
import { CustomInput } from 'components/management/table/style'
import Spinner from 'common/Spinner';


export default function QuantityTable() {
    const dispatch = useDispatch();
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { products, currentPage, loading, totalCount } = useSelector((state) => state.products);
    const [product, setProduct] = useState([]);
    const [newState, setNewState] = useState([]);
    const [showInput, setShowInput] = useState('')

    useEffect(() => {
        if (products) {
            setProduct([...products])
        }
    }, [products])



    useEffect(() => {
        dispatch(fetchProducts({ currentPage: 1, limitPages: rowsPerPage }))
    }, [rowsPerPage])


    const handleChangePage = (event, newPage) => {
        dispatch(fetchProducts({ currentPage: newPage + 1, limitPages: rowsPerPage }))
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
    };

    const handelEscKey = useCallback((event, id) => {
        if (event.key === "Escape") {
            console.log(event)

        }

    }, [])

    useEffect(() => {
        document.addEventListener("keydown", handelEscKey, false);

        return () => {
            document.removeEventListener("keydown", handelEscKey, false);
        };
    }, []);


    const handelChange = (event, id) => {
        const { name, value } = event.target
        const idItem = product.findIndex((item) => item.id === id);
        const newState = [...product];
        newState[idItem] = { ...newState[idItem], [name]: +value }

        const sendData = newState.filter((newState, index) => newState.price !== products[index].price || newState.quantity !== products[index].quantity)
        setNewState(sendData);
        setProduct(newState);

    }

    const handelSaveChange = () => {
        newState.forEach((element) => {
            dispatch(updateQuantityPriceProduct(element))
        })
    }


    return (
        <div style={tableStyle}>

            <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
                <Typography color="#537d97" variant='h4' sx={{ mr: 50 }}>مدیریت موجودی و کالاها</Typography>
                <SaveButton onClick={handelSaveChange} >ذخیره</SaveButton>
            </Box>

            {loading ? (<Spinner />) : <TableContainer component={Paper} sx={{ width: '75%' }} align='center' >
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
                        {product.map((item) => {
                            const { id, name, price, quantity } = item;

                            return (
                                <StyledTableRow key={id}>
                                    <StyledTableCell sx={{ width: '10%' }} align="center">{id + 1} </StyledTableCell>
                                    <StyledTableCell sx={{ width: '30%' }} align="left"> {name}</StyledTableCell>

                                    <StyledTableCell sx={{ width: '30%' }} align="center" >
                                        <CustomInput onClick={(event) => handelEscKey(event, id)} onChange={(event) => handelChange(event, id)} name="price" data-type='price' id={id} defaultValue={price} />
                                    </StyledTableCell>

                                    <StyledTableCell sx={{ width: '30%' }} align="center" >
                                        <CustomInput type="number" sx={{ border: showInput }} onChange={(event) => handelChange(event, id)} name="quantity" data-type='quantity' id={id} defaultValue={quantity} />
                                    </StyledTableCell>
                                </StyledTableRow>
                            )
                        })}
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

            </TableContainer>}

        </div>
    );
}
// price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

