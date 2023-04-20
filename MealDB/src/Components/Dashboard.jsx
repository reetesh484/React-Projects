import React from "react";
import Card from "./Card";
import { NavContext } from "../App";
import { useContext } from "react";
const Dashboard = (props) => {
  const meals = props.meals.meals;
  const navMode = useContext(NavContext);
  return (
    <div className={`grow  p-2 transition-all w-[100vw]  duration-100 m-4`}>
      <h1 className="text-3xl font-extrabold mb-4 w-full">Meals</h1>
      <div className="flex flex-wrap gap-4 justify-center w-full ">
        {meals &&
          meals.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
          {!meals && <h1 className="text-2xl text-gray-600 font-extrabold">No Meals Found</h1> }
      </div>
    </div>
  );    
};

export default Dashboard;
