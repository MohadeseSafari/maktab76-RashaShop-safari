import NavbarLayout from "layout/userLayout/navbar/NavbarLayout";
import CategoriesGroup from 'components/Home/category/CategoriesGroup';
import MainImage from "common/MainImage";
import ClientCard from "common/client/ClientCard";
import ContactUs from "layout/userLayout/footer/ContactUs";
import Footer from "layout/userLayout/footer/Footer";

const Home = () => {
   

    return (
        <>
            <NavbarLayout  />
            {/* <MainImage /> */}
            <CategoriesGroup />
            <ClientCard />
            <ContactUs />
            <Footer />
        </>

    );
}

export default Home;