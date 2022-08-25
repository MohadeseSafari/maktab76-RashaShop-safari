import { configureStore } from '@reduxjs/toolkit';
import ProductsReducer from 'redux/feature/products/ProductsSlice';
import OrdersReducer from 'redux/feature/orders/OrdersSlice';

export const store = configureStore({
    reducer: {
        products: ProductsReducer,
        orders: OrdersReducer

    }
})