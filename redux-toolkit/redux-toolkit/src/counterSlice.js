import {createSlice} from "@reduxjs/toolkit";

const initialState = {data:0};
const users = createSlice({
    name:"user",
    initialState,
    reducers:{
        increment(state,action){
            state.data++;
        },

        decrement(state){
            state.data--;
        }
    }
});

export default users.reducer;
export {users};
export const {increment,decrement} = users.actions;