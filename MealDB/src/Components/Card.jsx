import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col bg-blue-100 w-60 rounded-md shadow-md shadow-emerald-300 hover:scale-105 transition-all duration-100 hover:shadow-lg hover:shadow-emerald-500">
      <div className="image w-full max-h-36 ">
        <img
          className="max-h-full w-full object-cover rounded-md"
          src={props.item.strMealThumb}
          alt=""
        />
      </div>
      <div className="desc w-full min-h-16 p-2">
        <p className="capitalize text-md h-12 ">{props.item.strMeal}</p>
        <button className="bg-green-400 px-4 py-2 rounded-md relative bottom-0">
          Get Recipe
        </button>
      </div>
    </div>
  );
};

export default Card;
