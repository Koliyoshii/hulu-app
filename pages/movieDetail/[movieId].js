import MovieDetail from "../../components/MovieDetail/[movieId]";
import { DUMMY_DATA } from "../../lib/DUMMY_DATA"

function MovieDetailPage() {
    const results = DUMMY_DATA; 
  return (
    <div className="py-20">
        <MovieDetail movie={DUMMY_DATA[0]} />
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
      results: request,
    },
  };
}

export default MovieDetailPage