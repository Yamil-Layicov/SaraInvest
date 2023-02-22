import { configureStore } from "@reduxjs/toolkit";
import todo from "./todo";
import auth from "./auth";
import loginUser from './loginUser'

const store = configureStore({
    reducer:{
        todo,
        auth,
        loginUser
    }
})

export default store