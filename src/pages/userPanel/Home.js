import CategoriesList from "layout/userLayout/categories/CategoriesList";
import NavbarLayout from "../../layout/userLayout/navbar/NavbarLayout";
import { Container } from '@mui/material';

function Home() {
    return (
        <Container>
            <NavbarLayout />
            <CategoriesList />

        </Container>

    );
}

export default Home;