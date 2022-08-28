import { configureStore } from '@reduxjs/toolkit';
import ProductsReducer from 'redux/feature/products/ProductsSlice';
import OrdersReducer from 'redux/feature/orders/OrdersSlice';
import UsersReducer from './feature/user/UsersSlice';

export const store = configureStore({
    reducer: {
        products: ProductsReducer,
        orders: OrdersReducer,
        users: UsersReducer
    }
})