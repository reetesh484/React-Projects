import { createSlice } from "@reduxjs/toolkit"; 


const initialState = {
    details:[]
}

export const pokeSlice = createSlice({
    name:'pokemon',
    initialState,
    reducers:{
        populate:(state,action) => {
            if(action.payload)
            state.details = action.payload
            else
            state.details.length=0
        },
    }
})

export const {populate} = pokeSlice.actions

export default pokeSlice.reducer