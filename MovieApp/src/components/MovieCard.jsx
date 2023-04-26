import React,{useState} from "react";
import MovieDetails from "./MovieDetails";
import image from '../assets/default.jpg'
const MovieCard = ({ movie }) => {
  const [openModal, setOpenModal] = useState(false)
  return (
   <>
   { !movie.Error &&
    <div class="max-w-sm w-full h-[100%]">
      {/* <div
        class={`h-48  bg-no-repeat bg-center flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden`}
        title={movie?.Title}
        style={{backgroundImage:`url('${movie.Poster!=='N/A' ? movie.Poster : image }')`}}
      ></div> */}
      <img className="w-full" src={movie.Poster!=='N/A' ? movie.Poster : image} />
      <div class="border-r border-b border-l w-[100%] border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <p class="text-sm text-gray-600 uppercase flex items-center">
           
            {movie?.Type}
          </p>
          <div class="text-gray-900 font-bold text-xl mb-2">
            {movie?.Title}
          </div>
          {movie?.Plot && <p className="text-gray-600 mb-2">{movie?.Plot}</p> }
          <button onClick={() => setOpenModal(true)} class="px-4 py-2 bg-blue-500 text-white rounded-md text-base">
            More Details
          </button>
        </div>
        <div class="flex items-center">
          <div class="text-sm">
            <p class="text-gray-900 leading-none">Imdb Id:{movie?.imdbID}</p>
            <p class="text-gray-600">Year : {movie?.Year}</p>
          </div>
        </div>
      </div>
      {openModal && <MovieDetails movie={movie} closeModal={setOpenModal} /> }
    </div>
   
    }
    {movie.Error && <h2 className="text-xl font-bold">{movie.Error}</h2>}
   </>
  );
};

export default MovieCard;
