import {
  IMAGE_URL,
  MovieInList,
  getMovies,
  searchMovies,
} from "./utils/request";
import { Swiper } from "./components/Swiper";
import { Hero } from "./components/Hero";

export default async function Home() {
  const { results: movies }: { results: MovieInList[] } = await getMovies();
  console.log(`url(${IMAGE_URL}/original/${movies[0].backdrop_path})`);

  return (
    <>
      <div>
        <section
          className={`p-6 max-w-screen-xl min-h-80 relative mx-auto `}
          style={{
            backgroundImage: `url(${IMAGE_URL}/original/${movies[0]?.backdrop_path})`,
          }}
        >
          <Hero />
        </section>
      </div>{" "}
      <Swiper movies={movies} />
    </>
  );
}
