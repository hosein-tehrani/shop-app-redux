import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../servises/config";
import { productData } from "../../context/productData";
const initialState = {
    loading: false,
    products: [],
    error: ""
}
const fetchProducts = createAsyncThunk("product/fetchProducts" , ()=> {
    // return api.get("/products")
    return productData
})
const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, state=> {
            state.loading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action)=> {
            state.loading = false;
            state.products = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state, action)=> {
            state.loading = false;
            state.products = [];
            state.error = action.error.message;
        })
    }
})
export default productSlice.reducer;
export { fetchProducts };