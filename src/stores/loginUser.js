import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userPosition:{}
}   
    
const loginUser = createSlice({
    name:'loginUser',
    initialState,
    reducers:{
        loginPosition:(state,action) => {
            state.userPosition = localStorage.setItem("userDate",JSON.stringify(action.payload))
        }
    }
})

export const {loginPosition} = loginUser.actions
export default loginUser.reducer