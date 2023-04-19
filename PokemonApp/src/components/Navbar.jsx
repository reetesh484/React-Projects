import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { populate } from "../features/pokeSlice";
import { getPokeDetails } from "../utils/pokeMethods";
import {toast} from 'react-toastify'

const Navbar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const search = async () => {
   let queryString = query.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${queryString}`;
    if (!query.trim()) {
      toast.warn("Please enter a name!")
      return ;
    }
    
    await getPokeDetails(url)
      .then((res) => {
        if(res) dispatch(populate({results:[res]}))
        else dispatch(populate({results:[]}))
      })
      .catch((err) => console.log(err));
  };

 
  return (
    <div className="min-h-10 min-w-full bg-slate-500 flex justify-around flex-wrap items-center p-4  ">
      <div className="logo text-white font-extrabold">POKEAPI</div>
      <div className="search flex">
        <input  
          type="text"
          className="text-slate-900 p-2 outline-0"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value) }
        />
        <span
          className="bg-teal-300 px-4 py-3 cursor-pointer"
          onClick={() => search()}
        >
          Search
        </span>
      </div>
    </div>
  );
};

export default Navbar;
