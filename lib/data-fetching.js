import requests from "./requests";

export async function getMovies(genre) {
  return await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
}

export async function getMovieById(id) {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  ).then((res) => res.json());
}
