import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import CardCom from "../components/CardCom";
import useFetch from "../hooks/useFetch";
export const API_PATH_TOP = "movie/top_rated";
const TopMovies = () => {
  const { data: movies } = useFetch(API_PATH_TOP);
  return (
    <div className="bg-black">
      <Header />
      <Welcome />
      <div className="flex justify-center items-center font-serif bg-white text-blue-400 text-2xl font-bold">
        <h2>Top Movies</h2>
      </div>

      <div className="bg-black p-4 mt-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <CardCom key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TopMovies;
