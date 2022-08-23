import { configureStore } from '@reduxjs/toolkit';
import ProductsReducer from 'redux/feature/products/ProductsSlice';

export const store = configureStore({
    reducer: {
        products: ProductsReducer

    }
})