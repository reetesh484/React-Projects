import React, { useContext, useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { NavContext } from "../App";
import { getAreas, getCategories, getIngredients } from "../utils/mealMethods";

const Sidebar = () => {
  const navMode = useContext(NavContext);
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [opencat, setOpencat] = useState(false);
  const [openarea, setOpenarea] = useState(false);

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.meals))
      .catch((err) => console.log(err));

    getIngredients()
      .then((res) => setIngredients(res.meals))
      .catch((err) => console.log(err));

    getAreas()
      .then((res) => setAreas(res.meals))
      .catch((err) => console.log(err));
  }, []);

  const handleCategory = (e,category) => {
    e.stopPropagation();
    navMode.changeCategory(category);
    navMode.changeArea("");
    navMode.updateSearch("");
  };

  const handleArea = (e,area) => {
    e.stopPropagation();
    navMode.changeArea(area);
    navMode.updateSearch("");
    navMode.changeCategory("");
  };

  return (
    <div
      className={`duration-100 ${
        navMode.open ? "translate-x-0 " : "-translate-x-64 hidden"
      }  transition-all `}
    >
      <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto  border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <SearchInput />
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <ul className="accordion w-full bg-gray-50 rounded-lg shadow-lg shadow-gray-100 p-2">
                <li
                  className="cursor-pointer my-1"
                  onClick={() => setOpencat(!opencat)}
                >
                  <span className="font-bold text-xl tracking-tight text-gray-500 flex flex-row justify-between items-center">
                    <label className="px-3 text-lg text-gray-500  dark:text-gray-400">
                      Categories
                    </label>
                    <svg
                      className={`text-gray-500 mr-1 bi bi-arrow-down-short transition-all delay-150  ${
                        opencat ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                      />
                    </svg>
                  </span>
                  <div
                    className={`text-gray-500 text-md p-2  ${
                      opencat ? "" : "hidden"
                    }`}
                  >
                    {categories &&
                      categories.map((item, index) => {
                        return (
                          <a
                            key={index}
                            className={`flex items-center px-3 py-2 ${
                              item.strCategory === navMode.category
                                ? "bg-green-200"
                                : ""
                            } text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
                            href="#"
                            onClick={(e) => handleCategory(e,item.strCategory)}
                          >
                            <span className="mx-2 text-sm  font-medium">
                              {item.strCategory}
                            </span>
                          </a>
                        );
                      })}
                  </div>
                </li>
                <li
                  className="cursor-pointer my-1"
                  onClick={() => setOpenarea(!openarea)}
                >
                  <span className="font-bold text-xl tracking-tight text-gray-500 flex flex-row justify-between items-center">
                    <label className="px-3 text-lg text-gray-500   dark:text-gray-400">
                      Areas
                    </label>
                    <svg
                      className={`text-gray-500 mr-1 bi bi-arrow-down-short transition-all delay-150  ${
                        openarea ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                      />
                    </svg>
                  </span>
                  <div
                    className={`text-gray-500 text-md p-2  ${
                      openarea ? "" : "hidden"
                    }`}
                  >
                    {areas &&
                      areas.map((item, index) => {
                        return (
                          <a
                            key={index}
                            className={`flex items-center px-3 py-2 ${
                              item.strArea === navMode.area
                                ? "bg-green-200"
                                : ""
                            } text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
                            href="#"
                            onClick={(e) => handleArea(e,item.strArea)}
                          >
                            <span className="mx-2 text-sm  font-medium">
                              {item.strArea}
                            </span>
                          </a>
                        );
                      })}
                  </div>
                </li>
              </ul>
              
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
