import { configureStore } from "@reduxjs/toolkit";
import productslice from "../slice/productslice";
import userslice from "../slice/userslice";

const store = configureStore({
    reducer:{
        product:productslice,
        user:userslice
    },
    devTools:true
})

export default store