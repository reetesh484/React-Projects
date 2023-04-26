import React, { useContext } from "react";
import { MovieContext } from "../App";
import MovieCard from "./MovieCard";

const Movie = () => {
  const movieData = useContext(MovieContext);
  console.log("moviedata",movieData.loading)
  return (
    <>
      
        <h2 className="text-2xl mb-2  font-semibold">Search Results</h2>
        <div className="border-red-100 flex  justify-center gap-4 flex-wrap  ">
          {movieData?.result?.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </div>
       
        
    
    </>
  );
};

export default Movie;
