import NavbarLayout from "layout/userLayout/navbar/NavbarLayout";
import CategoriesGroup from 'components/Home/category/CategoriesGroup';
import CategoriesSideBar from 'layout/userLayout/sideBar/CategoriesSideBar';
import { useState } from 'react';
import MainImage from "common/MainImage";
import ClientCard from "common/client/ClientCard";

const Home = () => {
    const [open, setOpen] = useState(false);

    const handelOpenMenu = () => {
        setOpen(true);
    }

    const handelCloseMenu = () => {
        setOpen(false);
    }

    return (
        <>
            <NavbarLayout handelOpenMenu={handelOpenMenu} />
            <MainImage />
            <CategoriesSideBar open={open} handelCloseMenu={handelCloseMenu} />
            <CategoriesGroup />
            <ClientCard />
        </>

    );
}

export default Home;