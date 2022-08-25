import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadProductsApi } from 'api/index';

const initialState = {
    products: [],
    loading: false,
    error: '',
    currentPage: 1,
    totalCount: 0
}
export const fetchProducts = createAsyncThunk('products/fetchProducts', loadProductsApi)

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducer: {
       
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.data;
            state.totalCount = action.payload.count;
            state.currentPage = action.meta.arg.currentPage;
        });

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default ProductsSlice.reducer;