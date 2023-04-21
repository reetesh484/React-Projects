import React, { useState } from "react";
import { getMealRecipes } from "../utils/mealMethods";
import Recipe from "./Recipe";

const Card = (props) => {
  const [recipe, setRecipe] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const getRecipe = async (id) => {
    await getMealRecipes(id)
      .then((res) => setRecipe(res))
      .catch((err) => console.log(err));
  };
  const handleClick = async(id) => {
    await getMealRecipes(id)
    .then((res) => setRecipe(res))
    .catch((err) => console.log(err));
    setOpenModal(true)
  }
  return (
    <div className="w-64">
       <div className="flex flex-col bg-blue-100 rounded-md shadow-md shadow-emerald-300 hover:scale-105 transition-all duration-100 hover:shadow-lg hover:shadow-emerald-500">
      <div className="image w-full max-h-42 overflow-hidden  ">
        <img
          className="w-full max-h-100 object-cover rounded-md"
          src={props.item.strMealThumb}
          alt=""
        />
      </div>
      <div className="desc w-full  p-2">
        <p className="capitalize text-md h-16">{props.item.strMeal}</p>
        <button
          onClick={() => handleClick(props.item.idMeal)}
          className="bg-green-400 px-4 py-2 mt-2 rounded-md "
        >
          Get Recipe
        </button>
      </div>
       </div>
      {openModal && <Recipe closeModal={() => setOpenModal(false)} recipe={recipe} />}
    </div>
  );
};

export default Card;
