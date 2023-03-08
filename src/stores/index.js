import { configureStore } from "@reduxjs/toolkit";
import todo from "./todo";
import auth from "./auth";
import loginUser from './loginUser'
import editUser from "./editUser";
import floorsRoomDetail from "./floorsRoomDetail";

const store = configureStore({
    reducer:{
        todo,
        auth,
        loginUser,
        editUser,
        floorsRoomDetail
    }
})

export default store