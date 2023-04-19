import React from "react";
import PokeDetails from "./PokeDetails";

const Modal = ({ closeModal, details, name, image }) => {
  return (
    <div>
      <div
        className="min-w-screen min-h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div className="w-[90%] max-h-screen overflow-y-scroll max-w-2xl p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
          <span
            className="absolute top-2 right-3 cursor-pointer bg-cyan-500 text-white text-lg text-center font-bold  w-8 h-8 rounded-full"
            onClick={() => closeModal(false)}
          >
            X
          </span>

          <PokeDetails image={image} name={name} details={details} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
