import { Movie, getMovies } from "./utils/request";
import { MovieCard } from "./components/MovieCard";

export default async function Home() {
  const movies: Movie[] = await getMovies();
  return (
    <>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-screen-xl mx-auto p-6 ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}
