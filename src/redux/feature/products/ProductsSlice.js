import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    loadProductsApi,
    deleteProductApi,
    updateProductApi,
    createProductApi,
    loadAllProductsApi
} from "api/index";

const initialState = {
    products: [],
    allProducts: [],
    loading: false,
    error: "",
    currentPage: 1,
    totalCount: 0,
};
//Get Products
export const fetchProducts = createAsyncThunk("products/fetchProducts", loadProductsApi);

//Get All
export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", loadAllProductsApi);

//Delete Product
export const deleteProduct = createAsyncThunk("products/deleteProducts", async (id) => {
    await deleteProductApi(id);
    return { id };
}
);

//Update Product
export const updateProduct = createAsyncThunk("products/updateProducts", async (product) => {
    fetchProducts();
    return await updateProductApi(product);
}
);

//Create Product
export const createProduct = createAsyncThunk("products/createProducts", async (product) => {
    return await createProductApi(product);
}
);

export const ProductsSlice = createSlice({
    name: "products",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        //get Products
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.data;
            state.totalCount = action.payload.count;
            state.currentPage = action.meta.arg.currentPage;
        });

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        //get All Products
        builder.addCase(fetchAllProducts.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.allProducts = action.payload;
        });

        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        //delete Product
        builder.addCase(deleteProduct.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products = state.products.filter(
                (product) => +product.id !== action.payload.id
            );
        });

        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        //update Product
        builder.addCase(updateProduct.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products = state.products.filter((product) => +product.id !== action.payload.id);
            state.products.push(action.payload)
        });

        builder.addCase(updateProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        //create Product
        builder.addCase(createProduct.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products.push(action.payload);
        });

        builder.addCase(createProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default ProductsSlice.reducer;