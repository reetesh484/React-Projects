import React, { useContext } from "react";
import { NavContext } from "../App";

const Navbar = () => {
  const navMode = useContext(NavContext);

  return (
    <div className="flex justify-between px-8 py-4">
      <div className="logo">
        <h2 className="text-xl text-emerald-500 p-2 border-dashed border-2 rounded-md border-green-300  font-bold ">MealDB</h2>
      </div>
      <div className="nav text-black" onClick={() => navMode.toggleNav()}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="10"></rect>
          <rect y="30" width="80" height="10"></rect>
          <rect y="60" width="60" height="10"></rect>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
