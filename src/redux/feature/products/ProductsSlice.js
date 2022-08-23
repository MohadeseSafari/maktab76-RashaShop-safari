import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadProductsApi } from 'api/index';

const initialState = {
    products: [],
    loading: false,
    error: '',
    currentPage: 0,
    pageLimit: 5
}
export const fetchProducts = createAsyncThunk('products/fetchProducts', loadProductsApi(start, end))

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default ProductsSlice.reducer;