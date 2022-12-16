import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Thumbnail = ({ result }) => {
  const BASE_URL = "https://api.themoviedb.org/3";

  return (
    <div className="p-4 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <img
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}?api_key=${process.env.API_KEY}` ||
          `${BASE_URL}${result.poster_path}?api_key=${process.env.API_KEY}`
        }
        alt="Movie Thumbnail"
      />
      <div className="p-4">
        <p className=" truncate max-w-md">{result.overview}</p>
        <h2 className="mt-2 text-2xl text-white font-semibold transition-all duration-100 ease-in-out group-hover:font-extrabold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group:hover:opacity-100">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.first_air_date} •{" "}
          <HandThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
