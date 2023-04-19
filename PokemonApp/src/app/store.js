import { configureStore } from '@reduxjs/toolkit'
import pokeReducer from '../features/pokeSlice'
import axios from 'axios';

const loadInitialData = async() => {
     const result = await axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
    console.log(result)
}

export const store = configureStore({
  reducer: {
    poke:pokeReducer
  },
})