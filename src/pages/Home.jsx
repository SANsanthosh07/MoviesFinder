import CardCom from "../components/CardCom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InputFeild from "../components/InputFeild";
import Welcome from "../components/Welcome";
import useFetch from "../hooks/useFetch";
import Search from "./Search";

const Home = ({ apiPath }) => {
  const { data: movies } = useFetch(apiPath);

  return (
    <>
      <Header />
      <Welcome />
      {/* <Search /> */}
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
