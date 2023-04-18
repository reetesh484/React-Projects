import React, { useEffect, useState } from "react";
import axios from "axios";
import { getPokeDetails, getPokeForms } from "../utils/pokeMethods";
import Modal from "./Modal";

const Card = (props) => {
  const [details, setDetails] = useState([]);
  const [form, setForm] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getPokeDetails(props.item.url)
      .then((res) => {
        setDetails([...details, res]);
        return res.forms[0].url;
      })
      .then((url) => {
        getPokeForms(url)
          .then((res) => {
            setForm([...form, res]);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div class="p-4 w-full hover:scale-105 duration-500">
        <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
          <div>
            <h2 class="text-gray-900 text-lg capitalize font-bold">{props.item.name}</h2>
            <h3 class="mt-2 text-xl font-bold text-cyan-500 text-left">
              {details[0]?.base_experience}
            </h3>
            <p class="text-sm font-semibold text-gray-400 mr-1">
              Base Experience
            </p>
            <button 
            onClick={() => setOpenModal(true)}
            class="text-sm mt-6 px-4 py-2 bg-cyan-400 text-white rounded-lg  tracking-wider hover:bg-cyan-300 outline-none">
              Details
            </button>
          </div>
          <div class="bg-gradient-to-tr from-cyan-500 to-cyan-400 w-32 h-32  rounded-full shadow-2xl shadow-cyan-400 border-white  border-dashed border-2  flex justify-center items-center ">
            <div>
              <h1 class="text-white text-2xl">
                <img
                  className="object-cover object-center"
                  src={form[0]?.front_default || form[0]?.front_shiny}
                  alt={props.item.name}
                />
              </h1>
            </div>
          </div>
        </div>
      </div>
      {openModal && <Modal closeModal={setOpenModal} name={props.item.name} image={form[0]?.front_default} details={details}/>}
    </div>
  );
};

export default Card;
