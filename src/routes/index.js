import { BrowserRouter, Routes, Route ,Navigate } from 'react-router-dom';
//import main routes
import Cart from 'pages/userPanel/Cart';
import Home from 'pages/userPanel/Home';
import LoginForm from 'pages/managementPanel/LoginForm'
import ManagementPanel from 'pages/managementPanel/ManagementPanel';
import NoMatched from 'pages/errors/NoMatched';
// import sub routes
import Products from 'pages/managementPanel/Products';
import Quantity from 'pages/managementPanel/Quantity'
import Orders from 'pages/managementPanel/Orders';


function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='cart' element={<Cart />} />
                <Route path='login' element={<LoginForm />} />
                <Route path='management' element={<ManagementPanel />} >
                    <Route index element={<Products />} />
                    <Route path='quantity' element={<Quantity />} />
                    <Route path='orders' element={<Orders />} />
                    <Route path="*" element={<Navigate to="products" replace />} />
                </Route  >
                <Route path='*' element={<NoMatched />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainRoutes;