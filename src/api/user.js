import axios from 'api/http';
import { REFRESH_TOKEN_URL, LOGIN_URL } from 'config/api';

export const loginRequest = async (user) => {
    try {
        const response = await axios.post(LOGIN_URL, user);
        return response.data
    } catch (error) {
        console.log(error.response.data)
        return Promise.reject(error.response.data);
    }
}

export const refreshTokenRequest = async () => {
    try {
        const response = await axios.post(REFRESH_TOKEN_URL);
        console.log("inja refresh tokene",response.data)
        return response.data;
    } catch (error) {
        console.log("inja error refresh tokene",error)
        return Promise.reject(error.response.data);
    }
};

