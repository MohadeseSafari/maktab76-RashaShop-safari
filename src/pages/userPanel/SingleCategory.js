import CardList from "common/CardList";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadCategoryProductsApi } from "api";
import { Container } from '@mui/material'
import NavbarLayout from 'layout/userLayout/navbar/NavbarLayout';
import CategoriesSideBar from 'layout/userLayout/sideBar/CategoriesSideBar';


function SingleCategory() {
    const { nameCategory } = useParams();
    const [groupCategory, setGroupCategory] = useState([])
    const [ categoryFlag , setCategoryFlag] = useState(false)

    useEffect(() => {
        loadCategoryProductsApi(nameCategory).then((result) => {
            setGroupCategory(result);
            setCategoryFlag(true);
        })
    }, [nameCategory])

 
    return (
        <>
            <NavbarLayout />
            <CategoriesSideBar />
            <Container sx={{ ml: 30, mb: 5 }}>
            {categoryFlag && <CardList title={groupCategory[0].genre[0]} engNameCategory={nameCategory} data={groupCategory} />}
            </Container>
        </>
    );
}

export default SingleCategory;