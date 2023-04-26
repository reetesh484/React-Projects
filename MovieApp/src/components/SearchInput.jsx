import React, { useState, useContext } from "react";
import { getMovieBySearch } from "../Utils/utils";
import { MovieContext } from "../App";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [type,setType]=useState('t')
  const movieData = useContext(MovieContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(movieData.loading)
    await getMovieBySearch(search,type).then(res => movieData.updateResult(res)).catch(err => movieData.updateResult([]))
    setSearch("");
  };
  return (
    <div className="m-2">
      <form className="p-8  w-full md:w-auto flex flex-col md:flex-row   items-center
      " onSubmit={submitHandler}>
        <select className="p-2 outline-none rounded-md" onChange={e => setType(e.target.value) }>
            <option className="border-none rounded-md" value="t" name="t">By Title</option>
            <option value="i" name="i">By IMDB Id</option>
            <option value="s" name="s">By Search</option>
        </select>
        <input
          className="p-2 w-full rounded-md outline-offset-2 outline-blue-600 m-2"
          placeholder="Search any movie,series..."
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="px-4 py-2 w-full md:w-auto rounded-md bg-emerald-400 text-white"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
