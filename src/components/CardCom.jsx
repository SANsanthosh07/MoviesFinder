import backup from "../asserts/backup.png";

const CardCom = ({ movie }) => {
  const {
    poster_path,
    title,
    overview,
    vote_average,
    vote_count,
    release_date,
  } = movie;
  const img = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : backup;
  return (
    <div className="bg-gray-900 text-white rounded-sm shadow-lg overflow-hidden flex flex-col w-full sm:max-w-sm mx-auto">
      <div className="relative w-full">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
        <h1 className="text-lg sm:text-xl font-bold mb-2">{title}</h1>

        <p className="text-gray-300 text-sm sm:text-base mb-4 line-clamp-4">
          {overview}
        </p>

        <p className="text-gray-300 text-sm sm:text-base font-semibold mb-2">
          Release date: {release_date}
        </p>

        <div className="flex items-center justify-between mt-auto text-sm sm:text-base">
          <p className="text-yellow-400 font-semibold">
            Rating: ⭐{vote_average}
          </p>
          <p className="text-yellow-400 font-semibold">
            Rating Count: {vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCom;
