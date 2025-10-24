import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todos:["Navya","Uma","Durga","Karthika","Eshitha","Neha"]

}
export const todolistSlice=createSlice({
    name :"todolistS",
    initialState,
    reducers:{
        addTodo:(state,actions)=>{
            state.todos.push(actions.payload);
        },
        delTodo:(state,actions)=>{
            state.todos.splice(actions.payload,1)
        } 
    }
});
export const{addTodo,delTodo}=todolistSlice.actions
export default todolistSlice.reducer
