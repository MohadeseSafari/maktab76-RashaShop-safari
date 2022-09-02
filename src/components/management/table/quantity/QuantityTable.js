//import Redux
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Typography, Table, TableHead, TableBody, TableContainer, TablePagination, TableRow, Paper, Box, TextField } from '@mui/material';
import { StyledTableCell, tableStyle, StyledTableRow, SaveButton, customTextField } from 'components/management/table/style';
import { fetchProducts } from 'redux/feature/products/ProductsSlice';
import { EditText } from "react-edit-text";


export default function QuantityTable() {
    const dispatch = useDispatch();
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { products, currentPage, loading, totalCount } = useSelector((state) => state.products);
    const [product, setProduct] = useState([]);
    const [changedItem, setChangedItem] = useState([]);

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

    const handelChangePrice = (e, id) => {
        const idItem = product.findIndex((item) => item.id === id);
        const newChangeItem = [...product];
        console.log(newChangeItem[idItem])
        newChangeItem[idItem].price = e.target.value
        setProduct(newChangeItem);
        const newPriceList = [...changedItem];
        const newIdItem = changedItem.findIndex((item) => item.id === id);

        if (newIdItem === -1) {
            const newObject = { id: id, newValuePrice: e.target.value, newValueQuantity: newChangeItem[idItem].quantity };
            newPriceList.push(newObject);
        } else {
            newPriceList[newIdItem].newValuePrice = e.target.value;
        }
        setChangedItem(newPriceList);

    }

    const handelChangeQuantity = (e, id) => {
        const idItem = product.findIndex((item) => item.id === id);
        const newChangeItem = [...product];
        const obj = { ...newChangeItem[idItem] };
        obj.quantity = e.target.value
        setProduct(newChangeItem);
        const newQuantityList = [...changedItem];
        const newIdItem = changedItem.findIndex((item) => item.id === id);

        if (newIdItem === -1) {
            const newObject = { id: id, newValueQuantity: e.target.value, newValuePrice: newChangeItem[idItem].price };
            newQuantityList.push(newObject);
        } else {
            newQuantityList[newIdItem].newValueQuantity = e.target.value;
        }
        console.log(newQuantityList)
        setChangedItem(newQuantityList);
    }


    return (
        <div style={tableStyle}>

            <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
                <Typography color="#537d97" variant='h4' sx={{ mr: 50 }}>مدیریت موجودی و کالاها</Typography>
                <SaveButton >ذخیره</SaveButton>
            </Box>

            <TableContainer component={Paper} sx={{ width: '75%' }} align='center' >
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
                            const { id, name, price, quantity } = item
                            return (
                                <StyledTableRow key={id}>
                                    <StyledTableCell sx={{ width: '10%' }} align="center">{id + 1} </StyledTableCell>
                                    <StyledTableCell sx={{ width: '30%' }} align="left"> {name}</StyledTableCell>
                                    <StyledTableCell sx={{ width: '30%' }} align="center" ><EditText onChange={(e) => handelChangePrice(e, id)} value={price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} /></StyledTableCell>
                                    <StyledTableCell sx={{ width: '30%' }} align="center" ><EditText onChange={(e) => handelChangeQuantity(e, id)} value={quantity} /></StyledTableCell>
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

            </TableContainer>

        </div>
    );
}


