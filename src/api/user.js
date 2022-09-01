import axios from 'api/http';
import { REFRESH_TOKEN_URL, LOGIN_URL } from 'config/api';

export const loginRequest = async (user) => {
    try {
        const response = await axios.post(LOGIN_URL, user);
        return response.data
    } catch (error) {
        console.log(error)
     
    }
}

export const refreshTokenRequest = async () => {
    try {
        const response = await axios.post(REFRESH_TOKEN_URL);
        return response.data;
    } catch (error) {
        return Promise.reject(error.response.data);
    }
};

