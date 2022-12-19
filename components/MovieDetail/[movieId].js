import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function MovieDetail({ movie }) {
  const {
    backdrop_path,
    poster_path,
    adult,
    title,
    overview,
    media_type,
    popularity,
    release_date,
    first_air_date,
    vote_average,
    vote_count,
  } = movie;
  console.log(movie);

  const BASE_URL = "http://image.tmdb.org/t/p/original";

  return (
    <>
      <div className="flex flex-col xl:hidden">
      <Image
            src={
              `${BASE_URL}${backdrop_path || poster_path}?api_key=${
                process.env.API_KEY
              }` || `${BASE_URL}${poster_path}`
            }
            alt=""
            width={720}
            height={480}
          />

        <div className="absolute top-0 right-0 bg-gradient-to-b from-[#06202A] h-10 w-full" />

        <div className="z-10 p-4">
          <h2 className="font-bold text-2xl py-3">{title}</h2>
          <h3>{overview}</h3>
        </div>
        <div>
          <p className="flex items-center p-4">
            {media_type && `${media_type} •`} {release_date || first_air_date} •{" "}
            <HandThumbUpIcon className="h-5 mx-2" /> {vote_count}
          </p>
        </div>
      </div>

      <div className="hidden xl:inline-flex flex-row items-center w-full px-20">
        <div className="relative max-w-6xl">
          <Image
            src={
              `${BASE_URL}${backdrop_path || poster_path}?api_key=${
                process.env.API_KEY
              }` || `${BASE_URL}${poster_path}`
            }
            alt=""
            width={1920}
            height={720}
          />

          <div className="hidden xl:block absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-full w-full max-w-3xl" />
        </div>

        <div className="z-10 py-4 -ml-48 max-w-3xl">
          <h2 className="font-bold text-2xl py-4">{title}</h2>
          <h3>{overview}</h3>

          <div>
            <p className="flex items-center py-4">
              {media_type && `${media_type} •`} {release_date || first_air_date}{" "}
              • <HandThumbUpIcon className="h-5 mx-2" /> {vote_count}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
