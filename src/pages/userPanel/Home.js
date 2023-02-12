import NavbarLayout from "layout/userLayout/navbar/NavbarLayout";
import CategoriesGroup from 'components/Home/category/CategoriesGroup';
import MainImage from "common/MainImage";
import ClientCard from "common/client/ClientCard";
import Footer from "layout/userLayout/footer/Footer";

const Home = () => {
   

    return (
        <>
            <NavbarLayout  />
            {/* <MainImage /> */}
            <CategoriesGroup />
            <ClientCard />
            {/* <Footer /> */}
        </>

    );
}

export default Home;