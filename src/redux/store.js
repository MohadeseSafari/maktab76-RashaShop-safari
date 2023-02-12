import { configureStore } from '@reduxjs/toolkit';
import ProductsReducer from 'redux/feature/products/ProductsSlice';
import OrdersReducer from 'redux/feature/orders/OrdersSlice';
import UsersReducer from 'redux/feature/user/UsersSlice';
import CategoriesReducer from 'redux/feature/category/CategorySlice';
import CartReducer from 'redux/feature/cart/CartSlice';
import CommentsClientReducer from 'redux/feature/comment/CommentSlice';
import SelectedProductReducer from 'redux/feature/products/ProductsSlice'

export const store = configureStore({
    reducer: {
        products: ProductsReducer,
        orders: OrdersReducer,
        users: UsersReducer,
        categories: CategoriesReducer,
        cart: CartReducer,
        commentsClient: CommentsClientReducer,
        selectedProduct: SelectedProductReducer
    }
})
