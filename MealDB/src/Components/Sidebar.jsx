import React, { useContext, useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { NavContext } from "../App";
import { getCategories } from "../utils/mealMethods";

const Sidebar = () => {
  const navMode = useContext(NavContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.categories))
      .catch((err) => console.log(err));
  }, []);


  const handleClick = (category) => {
    navMode.changeCategory(category)
    navMode.updateSearch("");
  }

  return (
    <div
      className={`duration-100 ${
        navMode.open ? "translate-x-0 " : "-translate-x-64 hidden"
      }  transition-all  `}
    >
      <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto  border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <SearchInput />
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                Categories
              </label>
              {categories &&
                categories.map((item, index) => {
                 return <a
                    key={index}
                    className={`flex items-center px-3 py-2 ${item.strCategory===navMode.category ? 'bg-green-200':''} text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
                    href="#"
                    onClick={() => handleClick(item.strCategory)}
                  >
                    <span className="mx-2 text-sm  font-medium">
                      {item.strCategory}
                    </span>
                  </a>;
                })}
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
