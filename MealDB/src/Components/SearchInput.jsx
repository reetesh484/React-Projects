import React, { useContext, useState } from "react";
import { NavContext } from "../App";
const SearchInput = () => {
 const navMode = useContext(NavContext)
 const [search,setSearch] = useState("")

 const handleSubmit = (e) => {
    e.preventDefault();
    navMode.updateSearch(search)
    setSearch("")
 }
  return (
    <div className="mt-4">
          <form className="rounded-lg" onSubmit={handleSubmit}>
            <div className="mb-1 flex items-center">
              <input
                type="text"
                className="w-full rounded-lg border border-gray-400 p-2"
                placeholder="Search ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit"  className="ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600">
                Search
              </button>
            </div>
          </form>
    </div>
  );
};

export default SearchInput;
 