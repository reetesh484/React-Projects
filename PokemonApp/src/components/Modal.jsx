import React from "react";
import PokeDetails from "./PokeDetails";

const Modal = ({ closeModal, details, name,image }) => {
  return (
    <div>
      <div
        className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div className="w-full  max-w-2xl p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
          <span
            className="absolute top-2 right-3 cursor-pointer bg-cyan-500 text-white text-lg text-center font-bold  w-8 h-8 rounded-full"
            onClick={() => closeModal(false)}
          >
            X
          </span>

          {/* <div className="">
            <div className="text-center p-5 flex-auto justify-center">
              <h2 className="text-xl font-bold py-4 ">Are you sure?</h2>
              <p className="text-sm text-gray-500 px-8">
                Do you really want to delete your account? This process cannot
                be undone
              </p>
            </div>
            <div className="p-3  mt-2 text-center space-x-4 md:block">
              <button
                onClick={() => closeModal(false)}
                className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </div> */}
          <PokeDetails image={image} name={name} details={details} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
