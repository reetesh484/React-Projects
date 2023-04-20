import React from "react";

const SearchInput = () => {
  return (
    <div className="mt-4">
          <form className="rounded-lg ">
            <div className="mb-1 flex items-center">
              <input
                type="text"
                className="w-full rounded-lg border border-gray-400 p-2"
                placeholder="Search ..."
              />
              <button className="ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600">
                Search
              </button>
            </div>
          </form>
    </div>
  );
};

export default SearchInput;
