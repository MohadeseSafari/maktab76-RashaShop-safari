import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loadProductsApi,
  deleteProductApi,
  updateProductApi,
  createProductApi,
  loadAllProductsApi,
  updateQuantityPriceProductApi,
  loadDescriptionProductApi,
} from "api/index";

const initialState = {
  products: [],
  selectedProduct:{},
  allProducts: [],
  loading: false,
  error: "",
  currentPage: 1,
  totalCount: 0,
};
//Get Products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  loadProductsApi
);

//Get All
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  loadAllProductsApi
);

//Delete Product
export const deleteProduct = createAsyncThunk(
  "products/deleteProducts",
  async (id) => {
    await deleteProductApi(id);
    return { id };
  }
);

//Update Product
export const updateProduct = createAsyncThunk(
  "products/updateProducts",
  async (product) => {
    fetchProducts();
    return await updateProductApi(product);
  }
);

//Update Quantity & Price Product
export const updateQuantityPriceProduct = createAsyncThunk(
  "products/updateQuantityPriceProducts",
  async (products) => {
    return await updateQuantityPriceProductApi(products);
  }
);

//Create Product
export const createProduct = createAsyncThunk(
  "products/createProducts",
  async (product) => {
    return await createProductApi(product);
  }
);

//Get SELECTED Products
export const fetchSelectedProduct = createAsyncThunk(
  "products/fetchSelectedProduct",
  async (idProduct) => {
    return await loadDescriptionProductApi(idProduct);
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
      const indexProduct = state.products.findIndex(
        (product) => product.id == action.payload.id
      );
      state.products[indexProduct] = action.payload;
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

    //update Quantity Price Product
    builder.addCase(updateQuantityPriceProduct.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(updateQuantityPriceProduct.fulfilled, (state, action) => {
      state.loading = false;
      const indexProduct = state.products.findIndex(
        (product) => +product.id === action.payload.id
      );
      state.products[indexProduct] = action.payload;
    });

    builder.addCase(updateQuantityPriceProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //get Selected Products
    builder.addCase(fetchSelectedProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSelectedProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedProduct = action.payload;
    });

    builder.addCase(fetchSelectedProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default ProductsSlice.reducer;
