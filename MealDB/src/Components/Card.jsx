import React, { useState } from "react";
import { getMealRecipes } from "../utils/mealMethods";
import Recipe from "./Recipe";

const Card = (props) => {
  const [recipe, setRecipe] = useState([]);
  const getRecipe = async (id) => {
    await getMealRecipes(id)
      .then((res) => setRecipe(res))
      .catch((err) => console.log(err));
  };
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
        <p className="capitalize text-md h-16">{props.item.strMeal}</p>
        <button
          onClick={() => getRecipe(props.item.idMeal)}
          className="bg-green-400 px-4 py-2 mt-2 rounded-md "
        >
          Get Recipe
        </button>
      </div>
      {recipe.length>0 && <Recipe recipe={recipe} />}
    </div>
  );
};

export default Card;
