import React from "react";
import { PokeTypes } from "../utils/pokeTypes";

const PokeDetails = ({ image, details, name }) => {
  const stats = details[0].stats;
  const moves = details[0].moves;
  const abilities = details[0].abilities
  
  return (
    <div>
      <div className="w-full flex  flex-col mt-6">
        <div className="profile w-full flex  items-center justify-evenly bg-teal-500 p-4">
          <div class="bg-gradient-to-tr from-cyan-500 to-cyan-400 w-32 h-32  rounded-full shadow-2xl shadow-cyan-400 border-white  border-dashed border-2  flex justify-center items-center ">
            <h1 class="text-white text-2xl">
              <img
                className="object-cover object-center"
                src={image}
                alt={name}
              />
            </h1>
          </div>
         <div className="profile-details">
         <h3 className="name text-2xl capitalize bg-blue-500 text-white text-center p-2 rounded-lg"> {name} </h3>
          <h3 className="name text-lg capitalize text-black">Weight: {details[0].weight}lbs </h3>
          <h3 className="name text-lg capitalize text-black">Height: {details[0].height}in </h3>
          <h3 className="name text-lg capitalize flex text-black">
            <span className="">Type:</span>
          <ul className="flex ">
            {
                details[0].types.map((item,index) => {
                    return <li className={`${PokeTypes[item.type.name]} px-1 mr-1 text-md rounded-sm  text-white`} key={index}>{item.type.name}</li>
                })
            }
          </ul>
           </h3>
         </div>
        </div>
        <div className="details  flex gap-2 justify-center items-center bg-yellow-300 p-4 ">
          <div className="stats-card w-32 bg-green-400 h-48  rounded-lg overflow-auto grow">
            <h2 className="text-lg capitalize text-center  w-full sticky top-0 bg-slate-500">Stats</h2>
            <ul className="mt-2 p-2">
              {stats.map((item,index) => {
                return (
                  <li className="flex justify-between" key={index}>
                    <span className="capitalize">{item.stat.name}</span>
                    <span className="">{item.base_stat}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="description w-32 bg-green-400 h-48 rounded-lg grow">
            <h2 className="text-lg capitalize text-center  w-full sticky top-0 bg-slate-500 ">Abilities</h2>
            <ul className="mt-2 px-2">
                {
                    abilities.map((item,index) => {
                        console.log(item)
                        return <li className="capitalize" key={index}>{item.ability.name}</li>
                    })
                }
            </ul>
          </div>
          <div className="power w-32 bg-green-400 h-48 relative rounded-lg overflow-auto grow">
            <h2 className="text-lg capitalize text-center  w-full sticky top-0 bg-slate-500  ">Moves</h2>
            <ul className="mt-2 px-2">
                {
                    moves.map((item,index) => {
                            return <li className="capitalize" key={index}>
                            {item.move.name}
                        </li>
                    })
                }
            </ul>
          </div>    
        </div>
      </div>
    </div>
  );
};

export default PokeDetails;
