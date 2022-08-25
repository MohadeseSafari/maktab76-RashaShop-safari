import axios from 'axios';
const BASE_URL = 'http://localhost:3002';
export const BASE_URL_IMAGE = 'http://localhost:3002/files';

export const loadProductsApi = async ({ currentPage, limitPages }) => {
    try {
        const response = await axios.get(`${BASE_URL}/products?_page=${currentPage}&_limit=${limitPages}`);
        const count = Number(response.headers["x-total-count"]);
        return { data: response.data, count: count };
    } catch (error) {
        return Promise.reject(error);
    }
}

export const loadOrdersApi = async ({ delivered, currentPage, limitPages }) => {
    try {
        const response = await axios.get(`${BASE_URL}/orders?delivered=${delivered}&_page=${currentPage}&_limit=${limitPages}`);
        const count = Number(response.headers["x-total-count"]);
        return { data: response.data, count: count };
    } catch (error) {
        return Promise.reject(error);
    }
}