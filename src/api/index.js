import { axiosInstance } from "api/http";
import axios from 'axios';
import { BASE_URL } from 'config/api';
axios.defaults.baseURL = BASE_URL
// Products
export const loadProductsApi = async ({ currentPage, limitPages }) => {
  try {
    const response = await axios.get(
      `/products?_page=${currentPage}&_limit=${limitPages}`
    );
    const count = Number(response.headers["x-total-count"]);
    return { data: response.data, count: count };
  } catch (error) {
    return Promise.reject(error);
  }
};

export const loadAllProductsApi = async () => {
  try {
    const response = await axios.get(`/products`);
    return  response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};


//Orders
export const loadOrdersApi = async ({ delivered, currentPage, limitPages }) => {
  try {
    const response = await axios.get(
      `/orders?delivered${delivered}&_page=${currentPage}&_limit=${limitPages}`
    );

    const count = Number(response.headers["x-total-count"]);
    return { data: response.data, count: count };
  } catch (error) {
    return Promise.reject(error);
  }
};

//Category
export const loadCategoriesApi = async () => {
  try {
    const response = await axios.get("/category");
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const loadCategoriesProductsApi = async (id) => {
  try {
    const response = await axios.get(`/category/${id}`);
    console.log("response products ", response);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

//Delete Product
export const deleteProductApi = async (id) => {
  try {
    const response = await axiosInstance.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

//Update Product
export const updateProductApi = async (product) => {
  try {
    const response = await axiosInstance.put(`/products/${product.id}`, product);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

//Create Product
export const createProductApi = async (product) => {
  try {
    const response = await axiosInstance.post("/products", product);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

//upload Image
export const uploadImageApi = async (image) => {
  try {
    const response = await axiosInstance.post("/upload", image);
    return response.data.filename;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteImageApi = async (code) => {
  try {
    const response = await axiosInstance.put(`/products?image=${code}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
//update Orders
export const updateOrdersApi = async (id) => {
  try {
    const response = await axiosInstance.patch(`/orders/${id}`, {
      delivered: "true",
      expectAt: Date.now(),
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const loadProductsCategoriesApi = async (categoryId) => {
  try {
    const response = await axios.get(
      `/products?category=${categoryId}&_limit=4`
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const loadCategoryProductsApi = async (categoryName) => {
  try {
    const response = await axios.get(`/products?category=${categoryName}`);
    return response.data ;
  } catch (error) {
    return Promise.reject(error);
  }
};









