import React from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { populate } from "../features/pokeSlice";
import { getPokemons } from "../utils/pokeMethods";

const Home = ({ details }) => {
      const pokemon = details.results;
  const dispatch = useDispatch();
  const handlePagination = async (url) => {
    await getPokemons(url)
      .then((res) => dispatch(populate(res)))
      .catch((err) => err);
  };
  
  return (
    <div className="bg-gradient-to-r  from-orange-300 to-cyan-300 min-h-[100vh]">
      <div className=" flex flex-wrap justify-center ">
        {pokemon &&
          pokemon.length > 0 &&
          pokemon.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        { (!pokemon || pokemon.length<1) && (
          <h2 className="text-xl text-gray-600 capitalize text-center p-4">
            No Pokemon Found
          </h2>
        )}
      </div>
      <div className="flex flex-wrap gap-2 justify-center p-2">
        <button
          className="bg-blue-500 px-4 py-2 rounded-md"
          onClick={() => handlePagination(details.previous)}
        >
          Prev
        </button>
        <button
          className="bg-blue-500 px-4 py-2 rounded-md"
          onClick={() => handlePagination(details.next)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
