import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadCategoriesApi, loadCategoriesProductsApi } from "api/index";

const initialState = {
  categories: [],
  loading: false,
  error: "",
};
export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  loadCategoriesApi
);
// export const fetchCategoriesProducts = createAsyncThunk(`category/fetchCategories/${id}`, loadCategoriesApi)
export const fetchCategoriesProducts = (id) => {
  return createAsyncThunk(
    ` /fetchCategories/${id}`,
    loadCategoriesProductsApi(id)
  );
};

export const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });

    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default CategoriesSlice.reducer;
