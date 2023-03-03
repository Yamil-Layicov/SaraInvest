import { configureStore } from "@reduxjs/toolkit";
import todo from "./todo";
import auth from "./auth";
import loginUser from './loginUser'
import editUser from "./editUser";

const store = configureStore({
    reducer:{
        todo,
        auth,
        loginUser,
        editUser
    }
})

export default store