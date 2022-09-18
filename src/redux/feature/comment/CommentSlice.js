import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadCommentsClientApi } from 'api'

const initialState = {
    commentsClient: [],
    loading: false,
    error: '',

}
export const fetchCommentsClient = createAsyncThunk('commentsClient/fetchCommentsClient', loadCommentsClientApi);



export const CommentsClient = createSlice({
    name: 'commentsClient',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCommentsClient.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(fetchCommentsClient.fulfilled, (state, action) => {
            state.loading = false;
            state.commentsClient = action.payload;
        });

        builder.addCase(fetchCommentsClient.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default CommentsClient.reducer;