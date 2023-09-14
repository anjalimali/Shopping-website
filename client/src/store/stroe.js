import { configureStore } from "@reduxjs/toolkit";
import Productslice from "../slice/Productslice";

const store = configureStore({
    reducer: { product: Productslice },
    devTools: true
})

export default store