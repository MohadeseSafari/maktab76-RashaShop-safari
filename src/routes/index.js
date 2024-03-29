import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
//import main routes
import Cart from 'pages/userPanel/Cart';
import Checkout from 'pages/userPanel/checkout/Checkout';
import Payment from 'pages/userPanel/Payment';

import Home from 'pages/userPanel/Home';
import LoginForm from 'pages/managementPanel/loginForm/LoginForm'
import ManagementPanel from 'pages/managementPanel/managementPanel';
import NoMatched from 'pages/errors/404';
// import sub routes
import Products from 'pages/managementPanel/main/Products';
import Quantity from 'pages/managementPanel/main/Quantity'
import Orders from 'pages/managementPanel/main/Orders';
import PrivateRoutes from './PrivateRoutes';

import SingleCategory from 'pages/userPanel/SingleCategory';
import SingleProduct from 'pages/userPanel/SingleProduct';
import BookDescription from 'pages/userPanel/book/BookDescription';
import AdditionalInformation from 'pages/userPanel/book/AdditionalInformation';
import Review from 'pages/userPanel/book/Review';

function MainRoutes() {

    return (
        <BrowserRouter>
            <ToastContainer />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='category/:nameCategory' element={<SingleCategory />} />
                <Route path='book/:idProduct' element={<SingleProduct />}>
                    <Route index path='BookDescription' element={<BookDescription />}/>
                    <Route path='AdditionalInformation' element={<AdditionalInformation />}/>
                    <Route path='Review' element={<Review />}/>
                </Route>
                <Route path='cart' element={<Cart />} />
                <Route path='cart/checkout' element={<Checkout />} />

                <Route path='management' element={<LoginForm />} />
                <Route path='management' element={<PrivateRoutes><ManagementPanel /></PrivateRoutes>} >
                    <Route path='products' element={<Products />} />
                    <Route path='quantity' element={<Quantity />} />
                    <Route path='orders' element={<Orders />} />
                </Route  >

                <Route path='payment/:result' element={<Payment />} />
                <Route path='*' element={<NoMatched />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainRoutes;