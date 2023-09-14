import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    data: []
}
// getproduct
export const getproduct = createAsyncThunk('product/getproduct', async () => {
    const { data } = await axios.get('http://localhost:5000/api/product')
    return data.data
})

// postproduct
export const postproduct = createAsyncThunk('product/postproduct', async (obj) => {
    const token = localStorage.getItem('token')
    const {data} = await axios.post('http://localhost:5000/api/product',obj,{headers:{'auth_token':token}})
    return data.data
})

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: {
        [getproduct.fulfilled]:(state,{payload})=>{
            state.data = payload
        },
        [postproduct.fulfilled]:(state,{payload})=>{
            state.data = state.data.concat(payload)
        }
    }
})

export default productSlice.reducer