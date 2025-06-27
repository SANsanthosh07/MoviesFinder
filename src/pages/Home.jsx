import CardCom from "../components/CardCom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InputFeild from "../components/InputFeild";
import Welcome from "../components/Welcome";
import useFetch from "../hooks/useFetch";

export const API_PATH_NOW = "movie/now_playing";
const Home = () => {
  const { data: movies } = useFetch(API_PATH_NOW);

  return (
    <>
      <Header />
      <Welcome />
      <InputFeild />
      <div className="bg-black p-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <CardCom key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
