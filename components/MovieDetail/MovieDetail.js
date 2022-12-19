import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

function MovieDetail({ movie }) {
  const {
    backdrop_path,
    poster_path,
    homepage,
    title,
    runtime,
    genres,
    overview,
    popularity,
    release_date,
    status,
    first_air_date,
    vote_count,
  } = movie;
  console.log(movie);

  const BASE_URL = "http://image.tmdb.org/t/p/original";

  return (
    <>
      {/* Mobile screen */}
      <div className="flex flex-col xl:hidden px-20">
        <Image
          className="w-full"
          src={
            `${BASE_URL}${backdrop_path || poster_path}?api_key=${
              process.env.API_KEY
            }` || `${BASE_URL}${poster_path}`
          }
          alt=""
          width={720}
          height={480}
        />

        <div className="relative z-10 py-4">
          <h2 className="font-bold text-2xl py-3 z-10">{title}</h2>
          <h3>{overview}</h3>
          <h4 className="font-semibold py-4">
            {genres.map((genre) => `| ${genre.name} `)}
          </h4>
        </div>
        <div>
          <p className="flex items-center">
            <ClockIcon className="h-5 mx-2" />
            <p>{runtime} minutes</p>
          </p>
          <p className="flex items-center">
            <HandThumbUpIcon className="h-5 mx-2" /> {vote_count} •{" "}
            <ArrowTrendingUpIcon className="h-5 mx-2" /> {popularity}
          </p>
          <p className="flex items-center py-4">
            {`Status: ${status} •`} {release_date || first_air_date}
          </p>
          {homepage.trim().length > 0 && (
            <div className="flex flex-row cursor-pointer group hover:text-white">
              <a href={homepage} rel="noreferrer" target="_blank">
                More information about {title}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Wide screen */}
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

          <div className="hidden xl:block absolute top-0 right-0 bg-gradient-to-l from-[#06202A] to-transparent h-full w-full max-w-3xl" />
        </div>

        <div className="z-10 py-4 -ml-48 max-w-3xl">
          <h2 className="font-bold text-2xl py-4">{title}</h2>
          <h3 className="py-4">{overview}</h3>
          <h4 className="font-semibold py-4">
            {genres.map((genre) => `| ${genre.name} `)}
          </h4>

          <div>
            <p className="flex items-center">
              <ClockIcon className="h-5 mx-2" />
              <p>{runtime} minutes</p>
            </p>
            <p className="flex items-center">
              <HandThumbUpIcon className="h-5 mx-2" /> {vote_count} •{" "}
              <ArrowTrendingUpIcon className="h-5 mx-2" /> {popularity}
            </p>
            <p className="flex items-center py-4">
              {`Status: ${status}`} • {release_date || first_air_date}
            </p>
            {homepage.trim().length > 0 && (
              <div className="flex flex-row cursor-pointer group hover:text-white">
                <a className="font-semibold" href={homepage} rel="noreferrer" target="_blank">
                  More information about {title}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
