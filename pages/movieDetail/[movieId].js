import MovieDetail from "../../components/MovieDetail/MovieDetail";
import { getMovieById } from "../../lib/data-fetching";

function MovieDetailPage({ movie }) {

  return (
    <div className="py-20">
      <MovieDetail movie={movie} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.movieId;
  const request = await getMovieById(id);
  console.log("Movie >>> ", request);

  return {
    props: {
      movie: request,
    },
  };
}

export default MovieDetailPage;
