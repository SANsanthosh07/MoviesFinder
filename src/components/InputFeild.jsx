import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const InputFeild = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  };

  return (
    <>
      <div className="bg-black w-full py-20 flex justify-center items-center">
        <div className="flex flex-col gap-8 items-center w-full px-4 sm:px-0">
          <form
            onSubmit={handleSearch}
            className="flex flex-col items-center gap-4 w-full sm:w-[32rem]"
          >
            <div className="relative w-full">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="search"
                name="search"
                placeholder="Search Movies..."
                className="w-full h-14 sm:h-16 pl-10 pr-4 bg-white outline-none rounded-full placeholder:text-lg sm:placeholder:text-2xl text-lg sm:text-2xl placeholder:font-serif"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-60 h-12 text-white text-xl sm:text-2xl font-medium rounded-full bg-gradient-to-r from-indigo-600 to-sky-400 hover:opacity-80 transition"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <hr className="h-1 bg-gray-200" />
      <div className="flex justify-center items-center text-blue-400 text-xl sm:text-2xl font-bold text-center px-4">
        <h2>Now Playing</h2>
      </div>
    </>
  );
};

export default InputFeild;
