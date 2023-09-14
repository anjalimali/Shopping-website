import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    data: [],
    userData:{token:'',user:''}
}
// getuser
export const getuser = createAsyncThunk('user/getuser', async () => {
    const { data } = await axios.get('http://localhost:5000/api/user')
    return data.data
})

// login
export const loginuser = createAsyncThunk('user/loginuser', async (obj) => {
    const { data } = await axios.post('http://localhost:5000/api/user/login', obj)
    return data.data
})
const userslice = createSlice({
    name: "user",
    initialState,
    reducers:{
        logout:(state,{payload})=>{
            localStorage.clear()
            state.userData = {token:'',user:''}
        }
    },
    extraReducers: {
        [getuser.fulfilled]: (state, { payload }) => {
            state.data = payload
        },
        [loginuser.fulfilled]: (state, { payload }) => {
            localStorage.setItem('token',payload.token)
            state.userData.token = payload.token
            state.userData.user = payload.user
        }
    }
})

export default userslice.reducer
export const  {logout} = userslice.actions