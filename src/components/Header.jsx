import { NavLink } from "react-router-dom";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import image from "../asserts/image.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black w-full sticky top-0 z-50">
      <nav className="bg-white w-full h-16 flex justify-between items-center px-4">
        <NavLink to="/">
          <div className="bg-black w-[210px] p-2 hover:bg-zinc-900 transition-colors duration-300 rounded-xl">
            <div className="flex items-center gap-3">
              <img
                src={image}
                className="text-amber-300 w-10 h-10 hover:scale-150 drop-shadow-md"
              />
              <h1 className="font-extrabold text-white text-xl flex items-center">
                <span className="text-amber-300 text-2xl drop-shadow-sm hover:scale-150 transition-transform duration-200 animate-bounce">
                  M
                </span>
                ovies
                <span className="text-amber-300 text-2xl drop-shadow-sm hover:scale-150 transition-transform duration-200 animate-bounce">
                  F
                </span>
                inder
              </h1>
            </div>
          </div>
        </NavLink>

        <div
          className="sm:hidden text-black text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </div>

        <div className="hidden sm:flex gap-5 text-black font-semibold text-xl font-serif">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-amber-300" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/topmovies"
            className={({ isActive }) => (isActive ? "text-amber-300" : "")}
          >
            Top Movies
          </NavLink>
          <NavLink
            to="/upcoming"
            className={({ isActive }) => (isActive ? "text-amber-300" : "")}
          >
            Upcoming
          </NavLink>
        </div>
      </nav>

      {menuOpen && (
        <div className="sm:hidden bg-white text-black font-semibold text-xl font-serif flex flex-col items-start px-4 py-2 gap-2">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "text-amber-300" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/topmovies"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "text-amber-300" : "")}
          >
            Top Movies
          </NavLink>
          <NavLink
            to="/upcoming"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "text-amber-300" : "")}
          >
            Upcoming
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
