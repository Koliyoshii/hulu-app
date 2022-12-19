import requests from "./requests";

export async function getMovies(genre) {
  return await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
}

export async function getMovieById(id) {
  //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  
  //https://api.themoviedb.org/3/movie/76600?api_key=a5533b865f708629dcd723ed7dc3d637&language=en-US
  /* return await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  ).then((res) => res.json()); */
  return await fetch(
    `https://api.themoviedb.org/3/movie/76600?api_key=a5533b865f708629dcd723ed7dc3d637&language=en-US`
  ).then((res) => res.json());
}
