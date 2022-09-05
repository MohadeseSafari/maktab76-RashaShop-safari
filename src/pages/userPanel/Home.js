import CategoriesSideBar from 'layout/userLayout/sideBar/CategoriesSideBar';
import NavbarLayout from "layout/userLayout/navbar/NavbarLayout";
import CategoriesGroup from 'components/Home/category/CategoriesGroup'
import { Container } from '@mui/material';

function Home() {
    return (
        <Container>
            <NavbarLayout />
            <CategoriesSideBar />
            <CategoriesGroup />
        </Container>

    );
}

export default Home;