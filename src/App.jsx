import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TopMovies from "./pages/TopMovies";
import Upcoming from "./pages/Upcoming";
import Search from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home apiPath="movie/now_playing" />} />
      <Route
        path="/topmovies"
        element={<TopMovies apiPath="movie/top_rated" />}
      />
      <Route path="/upcoming" element={<Upcoming apiPath="movie/upcoming" />} />
      <Route path="/search" element={<Search apiPath="search/movie" />} />
    </Routes>
  );
}

export default App;
