import { configureStore } from "@reduxjs/toolkit";
import users1 from "../counterSlice";

const store = configureStore({
    reducer:{
        users:users1
    }
});

export default store;