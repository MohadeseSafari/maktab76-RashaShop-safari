import axios from 'api/http';

// Products
export const loadProductsApi = async ({ currentPage, limitPages }) => {
    try {
        const response = await axios.get(`/products?_page=${currentPage}&_limit=${limitPages}`);
        const count = Number(response.headers["x-total-count"]);
        return { data: response.data, count: count };
    } catch (error) {
        return Promise.reject(error);
    }
}

//Orders
export const loadOrdersApi = async ({ delivered, currentPage, limitPages }) => {
    try {
        const response = await axios.get(`/orders?delivered${delivered}&_page=${currentPage}&_limit=${limitPages}`);

        const count = Number(response.headers["x-total-count"]);
        return { data: response.data, count: count };
    } catch (error) {
        return Promise.reject(error);
    }
}

//Category
export const loadCategoriesApi = async () => {
    try {
        const response = await axios.get('/category');
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

//Delete Product
export const deleteProductApi = async (id) => {
    try {
        const response = await axios.delete(`/products/${id}`);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

//Update Product
export const updateProductApi = async ({ id, product }) => {
    try {
        const response = await axios.put(`/products/${id}`, product);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

//Create Product
export const createProductApi = async (product) => {
    try {
        const response = await axios.post('/products', product);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

//upload Image
export const uploadImageApi = async (image) => {
    try {
        const response = await axios.post('/upload', image);
        return response.data.filename;
    } catch (error) {
        return Promise.reject(error);
    }
}

export const deleteImageApi = async (code) => {
    try {
        const response = await axios.delete(`/products?image=${code}`);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

export const updateOrdersApi = async (id) => {
    try {
        const response = await axios.patch(`/orders/${id}`, { delivered: "true" });
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}