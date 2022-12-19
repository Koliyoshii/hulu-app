import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Thumbnail = ({ result }) => {
  const BASE_URL = "http://image.tmdb.org/t/p/original";
  const movieLink = `/movieDetail/${result.id}`

  return (
    <Link href={movieLink}>
      <div className="p-3 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 3xl:max-w-xl">
        <Image
          className=" shadow-md "
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}?api_key=${
              process.env.API_KEY
            }` || `${BASE_URL}${result.poster_path}`
          }
          alt="Movie Thumbnail"
          width={720}
          height={480}
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
    </Link>
  );
};

export default Thumbnail;
