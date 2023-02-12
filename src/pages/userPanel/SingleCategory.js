import CardList from "common/CardList";
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { loadCategoryProductsApi } from "api";
import { Container, Pagination, Box } from '@mui/material'
import NavbarLayout from 'layout/userLayout/navbar/NavbarLayout';



function SingleCategory() {

    const { nameCategory } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [groupCategory, setGroupCategory] = useState([]);
    const [totalCount, setTotalCount] = useState(null);
    const [perPage, setPerPge] = useState(8);
    const [categoryFlag, setCategoryFlag] = useState(false);
   


    useEffect(() => {
        loadCategoryProductsApi({ nameCategory: nameCategory, currentPage: 1, perPage }).then((result) => {
            setTotalCount(result.count)
            setGroupCategory(result.data);
            setCategoryFlag(true);
            setSearchParams({ page: 1, limit: perPage })
        })
    }, [nameCategory])

    const handleChangePage = (event, newPage) => {
        setSearchParams({ page: newPage, limit: perPage })
        loadCategoryProductsApi({ nameCategory: nameCategory, currentPage: newPage, perPage }).then((result) => {
            setGroupCategory(result.data);
            setCategoryFlag(true);
        })
    };


    return (
        <>
            <NavbarLayout  />
            <Container sx={{ mb: 5, display: 'flex', flexDirection: 'column' }}>
                {categoryFlag && <CardList title={groupCategory[0].genre[0]} engNameCategory={nameCategory} data={groupCategory} />}
                <Box sx={{ direction: 'rtl', mr: 50 }}>
                    <Pagination
                        sx={{ m: 5 }}
                        count={Math.ceil(totalCount / perPage)}
                        rowsPerPage={perPage}
                        onChange={handleChangePage}
                        showFirstButton
                        showLastButton />
                </Box>
            </Container>

        </>
    );
}

export default SingleCategory;