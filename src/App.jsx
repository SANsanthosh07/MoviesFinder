import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TopMovies from "./pages/TopMovies";
import Upcoming from "./pages/Upcoming";
import Search from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topmovies" element={<TopMovies />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
