import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import useFetch from "../hooks/useFetch";
import CardCom from "../components/CardCom";

const Upcoming = ({ apiPath }) => {
  const { data: movies } = useFetch(apiPath);
  return (
    <div>
      <Header />
      <Welcome />
      <div className="flex justify-center items-center font-serif bg-white text-blue-400 text-2xl font-bold">
        <h2>Upcoming</h2>
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

export default Upcoming;
