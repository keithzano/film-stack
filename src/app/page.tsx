import { IMAGE_URL, MovieInList, getMovies } from "./utils/request";
import { Swiper } from "./components/Swiper";
import { Hero } from "./components/Hero";

export default async function Home() {
  const { results: movies }: { results: MovieInList[] } = await getMovies();
  console.log(`url(${IMAGE_URL}/original/${movies[0].backdrop_path})`);

  return (
    <section className=" space-y-6">
      <div>
        <section
          className={`p-6 max-w-screen-xl min-h-80 relative mx-auto bg-cover grayscale-1 `}
          style={{
            backgroundImage: `url(${IMAGE_URL}/original/${
              movies[Math.floor(Math.random() * 10)]?.backdrop_path
            })`,
          }}
        >
          <Hero />
        </section>
      </div>{" "}
      <Swiper movies={movies} />
    </section>
  );
}
