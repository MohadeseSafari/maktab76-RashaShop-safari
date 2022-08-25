import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadOrdersApi } from 'api/index';

const initialState = {
    orders: [],
    loading: false,
    error: '',
    currentPage: 1,
    totalCount: 0
}
export const fetchOrders = createAsyncThunk('products/fetchOrders', loadOrdersApi)

export const OrdersSlice = createSlice({
    name: 'orders',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.orders = action.payload.data;
            state.totalCount = action.payload.count;
            state.currentPage = action.meta.arg.currentPage;
        });

        builder.addCase(fetchOrders.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default OrdersSlice.reducer;