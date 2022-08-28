import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginRequest, refreshTokenRequest } from 'api/user';
import { ACCESS_TOKEN, REFRESH_TOKEN, IS_LOGGED_IN } from 'config/constans';

const initialState = {
    isLoggedIn: localStorage.getItem(IS_LOGGED_IN)
        ? localStorage.getItem(IS_LOGGED_IN)
        : false,
    error: '',
}
export const login = createAsyncThunk('users/login', async (user) => {
    return await loginRequest(user).then((response) => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        localStorage.setItem(REFRESH_TOKEN, response.refreshToken);
        localStorage.setItem(IS_LOGGED_IN, true);
        return response;
    }).catch((error) => Promise.reject(error))
})

export const refreshToken = createAsyncThunk('users/refreshToken ',  (user) => {
    return refreshTokenRequest(user).then((response) => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        return response;
    }).catch((error) => Promise.reject(error))
})

export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            console.log('fulfilled', action)
            return { isLoggedIn: true, error: "" }
        });

        builder.addCase(login.rejected, (state, action) => {
            console.log('rejected', action)
            return { isLoggedIn: false, error: action.error.message };
        });


        builder.addCase(refreshToken.fulfilled, (state, action) => {
            console.log('fulfilled', action)
            state.isLoggedIn = true;
        });

        builder.addCase(refreshToken.rejected, (state, action) => {
            console.log('rejected', action)
            state.isLoggedIn = false;
            state.error = action.error.message;
        });
    }
})

export default UsersSlice.reducer;