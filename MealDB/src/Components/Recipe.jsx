import React from "react";

const Recipe = ({closeModal,recipe}) => {
  const instructions = recipe[0].strInstructions;
  return (
    <div>
        <div className="min-w-screen min-h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div className="w-[90%] max-h-screen mt-20 h-[600px] overflow-y-scroll max-w-2xl p-12 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
          <span
            className="absolute top-2 right-3 cursor-pointer bg-cyan-500 text-white text-lg text-center font-bold  w-8 h-8 rounded-full"
            onClick={() => closeModal(false)}
          >
            X
          </span>
          
          <h1 className="text-2xl font-extrabold">Recipe</h1>
          <ul className="text-md list-disc">
            {instructions.split('.').map((item,index) => {
                return <li key={index} className="" >{item}.</li>
            })}
          </ul>
        </div>
       
    </div>
    </div>
  );
};

export default Recipe;
