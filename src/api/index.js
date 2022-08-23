import axios from 'axios';
export const BASE_URL = 'http://localhost:3002';

export const loadProductsApi = async (start, end) => {
    try {
        const response = await axios.get(`${BASE_URL}/products?_start=${start}&_end=${end}`);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}