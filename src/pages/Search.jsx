import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CardCom from "../components/CardCom";
import Header from "../components/Header";
import Welcome from "../components/Welcome";

const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useEffect(() => {
    document.title = `Search results for "${queryTerm}"`;
  }, []);

  return (
    <>
      <Header />
      <Welcome />
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-4 sm:h-20 bg-white relative gap-2 sm:gap-0">
        <h2 className="text-blue-400 text-lg sm:text-2xl font-bold font-serif text-center w-full sm:w-auto">
          {movies.length === 0
            ? `No result found ( ${queryTerm} )`
            : `Result for ( ${queryTerm} )`}
        </h2>

        <Link
          to="/"
          className="text-sm sm:text-base text-black underline hover:text-blue-600 transition sm:absolute sm:right-8"
        >
          Back To Home
        </Link>
      </div>

      <div className="bg-black p-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies?.map((movie) => (
            <CardCom key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
