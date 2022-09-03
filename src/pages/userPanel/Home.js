import CategoriesList from "layout/userLayout/categories/CategoriesList";
import NavbarLayout from "../../layout/userLayout/navbar/NavbarLayout";
import CategoriesGroup from 'components/Home/category/CategoriesGroup'
import { Container } from '@mui/material';

function Home() {
    return (
        <Container>
            <NavbarLayout />
            <CategoriesList />
            <CategoriesGroup />
        </Container>

    );
}

export default Home;