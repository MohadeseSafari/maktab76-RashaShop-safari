import axios from 'api/http';

export const loadProductsApi = async ({ currentPage, limitPages }) => {
    try {
        const response = await axios.get(`/products?_page=${currentPage}&_limit=${limitPages}`);
        const count = Number(response.headers["x-total-count"]);
        return { data: response.data, count: count };
    } catch (error) {
        return Promise.reject(error);
    }
}

export const loadOrdersApi = async ({ delivered, currentPage, limitPages }) => {
    try {
        const response = await axios.get(`/orders?delivered${delivered}&_page=${currentPage}&_limit=${limitPages}`);

        const count = Number(response.headers["x-total-count"]);
        return { data: response.data, count: count };
    } catch (error) {
        return Promise.reject(error);
    }
}