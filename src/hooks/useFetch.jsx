import { useEffect, useState } from "react";

const useFetch = (apiPath, queryTerm = "") => {
  //   console.log(apiPath);
  const [data, setData] = useState([]);
  const key = import.meta.env.VITE_API_KEY;
  if (!key) {
    console.error("Missing VITE_API_KEY. Please check your .env file.");
  }
  //   console.log("API KEY:", import.meta.env.VITE_API_KEY);

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(url);
        const jsonData = await res?.json();
        setData(jsonData?.results || []);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchMovies();
  }, [url]);

  return { data };
};

export default useFetch;
