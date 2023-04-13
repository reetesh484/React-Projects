import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
    name:'todos' ,
    initialState,
    reducers:{
        addTodo:(state,action) => {
            let todo = {
                id:nanoid(),
                task:action.payload,
                complete:false
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action) => {
            let id = action.payload
            state.todos = state.todos.filter(item => item.id!==id)
        },
        completeTodo:(state,action) => {
            let uid = action.payload
            state.todos.map((item) => {
                if(item.id===uid){
                    item.complete = !item.complete;
                }
            })
        }
    }
})

export const {addTodo,removeTodo,completeTodo} = todoSlice.actions

export default todoSlice.reducer