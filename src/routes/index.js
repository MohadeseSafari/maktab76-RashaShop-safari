import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from 'pages/userPanel/Cart';
import Home from 'pages/userPanel/Home';
import ManagementPanel from 'pages/managementPanel/managementPanel';
import NoMatched from 'pages/errors/NoMatched';


function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='cart' element={<Cart />} />
                <Route path='management' element={<ManagementPanel />} />

                <Route path='*' element={<NoMatched />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainRoutes;