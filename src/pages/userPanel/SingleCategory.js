import CardList from "common/CardList";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "redux/feature/products/ProductsSlice";
import { Container } from '@mui/material'
import NavbarLayout from 'layout/userLayout/navbar/NavbarLayout';
import CategoriesSideBar from 'layout/userLayout/sideBar/CategoriesSideBar';


function SingleCategory() {
    const dispatch = useDispatch();
    const { nameCategory } = useParams();
    const allProducts = useSelector((state) => state.products.allProducts);
    console.log(allProducts)

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [])
    console.log(allProducts.filter(product => product.category === nameCategory))
    return (
        <>
            <NavbarLayout />
            <CategoriesSideBar />
            <Container sx={{ ml: 30, mb: 5 }}>
                <CardList title={nameCategory} data={allProducts.filter(product => product.category === nameCategory)} />
            </Container>
        </>
    );
}

export default SingleCategory;