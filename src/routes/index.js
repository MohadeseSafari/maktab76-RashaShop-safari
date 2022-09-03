import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
//import main routes
import Cart from 'pages/userPanel/Cart';
import Categories from 'components/Home/category/CategoriesGroup'
import Home from 'pages/userPanel/Home';
import LoginForm from 'pages/managementPanel/loginForm/LoginForm'
import ManagementPanel from 'pages/managementPanel/managementPanel';
import NoMatched from 'pages/errors/NoMatched';
// import sub routes
import Products from 'pages/managementPanel/main/Products';
import Quantity from 'pages/managementPanel/main/Quantity'
import Orders from 'pages/managementPanel/main/Orders';
import PrivateRoutes from './PrivateRoutes';

import PageProduct from 'components/Home/pageProduct/PageProduct'

function MainRoutes() {
    const idParams = useParams()
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='idParams' element={<Categories />} />
                <Route path='category/:idParams' element={<PageProduct />} />
                <Route path='cart' element={<Cart />} />
                <Route path='management' element={<LoginForm />} />
                <Route path='management' element={<PrivateRoutes><ManagementPanel /></PrivateRoutes>} >
                    <Route path='products' element={<Products />} />
                    <Route path='quantity' element={<Quantity />} />
                    <Route path='orders' element={<Orders />} />
                </Route  >
                <Route path='*' element={<NoMatched />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainRoutes;