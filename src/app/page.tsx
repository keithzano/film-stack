import { MovieInList, getMovies, searchMovies } from "./utils/request";
import { Swiper } from "./components/Swiper";
import { Hero } from "./components/Hero";

export default async function Home() {
  const { results: movies }: { results: MovieInList[] } = await getMovies();

  return (
    <>
      <div>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe hic
          quas veritatis eligendi similique dolore provident! Officia aperiam,
          unde id tempore pariatur, aliquid deserunt exercitationem et quis sint
          laborum. Aspernatur cum aut ad amet aliquam itaque quidem iure harum
          saepe nam! Eaque mollitia non voluptatibus atque officiis explicabo
          similique dolor ipsum ipsam animi? Suscipit, eveniet? Numquam rem sunt
          commodi?{" "}
        </p>
      </div>
      <section>
        {" "}
        <Swiper movies={movies} />
        <Hero />
      </section>
    </>
  );
}
