import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    cart: []
}

// middleware
export const getProduct = createAsyncThunk('product/getProduct', async () => {
    const { data } = await axios.get('http://localhost:5000/api/product')
    return data.data
})

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            state.cart = state.cart.concat(payload)
        }
    },
    extraReducers: {
        [getProduct.fulfilled]: (state, { payload }) => {
            state.data = payload
        }
    }

})

export const { addToCart } = productSlice.actions
export default productSlice.reducer