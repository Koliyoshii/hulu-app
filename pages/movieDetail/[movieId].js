import MovieDetail from "../../components/MovieDetail/MovieDetail";
import { DUMMY_DATA } from "../../lib/DUMMY_DATA";
import { getMovieById } from "../../lib/data-fetching";

function MovieDetailPage({ movie }) {
    const results = DUMMY_DATA; 
    console.log(movie)
  return (
    <div className="py-20">
        {/* <MovieDetail movie={movie} /> */}
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.query.movieId;
  //const request = [];
  const request = getMovieById(id);
  console.log("Movie >>> ", request)

  return {
    props: {
      movie: request,
    },
  };
}

export default MovieDetailPage