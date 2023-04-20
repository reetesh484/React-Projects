import React from "react";
import Card from "./Card";
const Dashboard = (props) => {
  const meals = props.meals.meals;
  console.log(meals);
  return (
    <div className="grow  p-2 m-4">
      <h1 className="text-3xl font-extrabold mb-4">Meals</h1>
      <div className="flex flex-wrap gap-4 justify-center ">
        {meals &&
          meals.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
      </div>
    </div>
  );
};

export default Dashboard;
