import MovieDetail from "../../components/MovieDetail/MovieDetail";
import { DUMMY_DATA } from "../../lib/DUMMY_DATA";
import { getMovieById } from "../../lib/data-fetching";

function MovieDetailPage({ movie }) {
    const results = DUMMY_DATA; 
    console.log(movie)
    if (movie.success === 'false') {
      return(
        <div className="py-20">
        <p>Movie could not be found.</p>
    </div>
      )
    }
  return (
    <div className="py-20">
        <MovieDetail movie={movie} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.query.movieId;
  //const request = [];
  const request = await getMovieById(id);
  console.log("Movie >>> ", request)

  return {
    props: {
      movie: request,
    },
  };
}

export default MovieDetailPage