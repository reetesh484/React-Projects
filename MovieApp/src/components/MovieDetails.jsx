import React, { useEffect, useState } from 'react'
import { getMovieBySearch } from '../Utils/utils'

const MovieDetails = ({movie,closeModal}) => {
   const [details,setDetails] = useState({})
    useEffect(() => {
        if(!movie?.Plot){
            getMovieBySearch(movie?.imdbID,'i').then(res => setDetails(res[0]))
        }
        else{
            setDetails(movie)
        }
    })
    console.log(details)
  return (
    <div>
    <div
      className="min-w-screen min-h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className=" max-h-screen  overflow-y-scroll max-w-2xl p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-purple-200 ">
        <span
          className="absolute top-2 right-3 cursor-pointer bg-blue-600 flex justify-center items-center  text-white text-lg text-center font-bold  w-8 h-8 rounded-full"
          onClick={() => closeModal(false)}
        >
          X
        </span>
        <div className="descripton flex  gap-4">
        <div
        class="w-1/2  lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title={details?.Title}
        style={{backgroundImage:`url('${details?.Poster}')`}}
      ></div>
        <div className="rest flex flex-col gap-4">
        <div>
            <h2 className="text-xl font-bold">Title</h2>
            <p className="text-base">
            {details?.Title}
            </p>
            </div>
           <div>
           <h3 className="text-xl font-bold">
                Plot
            </h3>
            <p className="text-base">
                {details?.Plot}
            </p>
           </div>
           <div>
           <h3 className="text-xl font-bold">
                Details
            </h3>
           <p className="text-lg font-semibold text-blue-800">IMDB Rating : <span className="text-base text-black-200 font-normal">{details?.imdbRating}</span> </p>
            <p className="text-lg font-semibold text-blue-800">Release Date: <span className="text-base text-black-200 font-normal">{details?.Released}</span></p>
            <p className="text-lg font-semibold text-blue-800">Language: <span className="text-base text-black-200 font-normal">{details?.Language}</span></p>
            <p className="text-lg font-semibold text-blue-800">Genre: <span className="text-base text-black-200 font-normal">{details?.Genre}</span></p>
            <p className="text-lg font-semibold text-blue-800">Actors: <span className="text-base text-black-200 font-normal">{details?.Actors}</span></p>
            <p className="text-lg font-semibold text-blue-800">Country: <span className="text-base text-black-200 font-normal">{details?.Country}</span></p>
            <p className="text-lg font-semibold text-blue-800">RunTime: <span className="text-base text-black-200 font-normal">{details?.Runtime}</span></p>

           </div> 
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MovieDetails