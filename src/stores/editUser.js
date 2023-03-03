import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   userEdit:{}
}   
    
const editedUser = createSlice({
    name:'editedUser',
    initialState,
    reducers:{
        userEdit:(state,action) => {
            state.userEdit = action.payload
        }
    }
    
})

export const {userEdit} = editedUser.actions
export default editedUser.reducer