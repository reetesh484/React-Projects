import React, { useEffect, useState } from "react";
import axios from "axios";
import { getPokeDetails, getPokeForms } from "../utils/pokeMethods";
import Modal from "./Modal";

const Card = (props) => {
  const [details, setDetails] = useState([]);
  const [form, setForm] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  if (props?.item?.url) {
    useEffect(() => {
      getPokeDetails(props.item.url)
        .then((res) => {
          setDetails([res]);
          return res.forms[0].url;
        })
        .then((url) => {
          getPokeForms(url)
            .then((res) => {
              setForm([res]);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }, [props]);
  } else {
    useEffect(() => {
      setDetails([props.item]);
      setForm([props.item.sprites]);
    }, [props]);
  }

  return (
    <div className="p-4">
      <div className="p-4 max-w-md hover:scale-105 duration-500">
        <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
          <div>
            <h2 className="text-gray-900 text-lg capitalize font-bold">
              {props.item.name}
            </h2>
            <h3 className="mt-2 text-xl font-bold text-cyan-500 text-left">
              {details[0]?.base_experience}
            </h3>
            <p className="text-sm font-semibold text-gray-400 mr-1">
              Base Experience
            </p>
            <button
              onClick={() => setOpenModal(true)}
              className="text-sm mt-6 px-4 py-2 bg-cyan-400 text-white rounded-lg  tracking-wider hover:bg-cyan-300 outline-none"
            >
              Details
            </button>
          </div>
          <div className="bg-gradient-to-tr from-cyan-500 to-cyan-400 w-32 h-32  rounded-full shadow-2xl shadow-cyan-400 border-white  border-dashed border-2  flex justify-center items-center ">
            <div>
              <h1 className="text-white text-2xl">
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
      {openModal && (
        <Modal
          closeModal={() => setOpenModal(false)}
          name={props.item.name}
          image={form[0]?.front_default}
          details={details}
        />
      )}
    </div>
  );
};

export default Card;
