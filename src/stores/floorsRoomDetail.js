import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    roomDetail:{}
}   

const floorsRoomDetail = createSlice({
    name:'floorsRoomDetail',
    initialState,
    reducers:{
        roomDetails:(state,action) => {
            state.roomDetail = action.payload
        }
    }
})

export const {roomDetails} = floorsRoomDetail.actions
export default floorsRoomDetail.reducer