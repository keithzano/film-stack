import { Movie } from "../utils/request";
import Image from "next/image";

const IMAGE_URL = "https://image.tmdb.org/t/p/original";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <>
      <article className=" cursor-pointer ">
        <Image
          width={500}
          height={500}
          className=" rounded-lg "
          src={`${IMAGE_URL}${movie.poster_path}`}
          alt={`${movie.title} image`}
        />
        <section className=" p-4 gap-4 ">
          <h2 className="text-xl"> {movie.title} </h2>
          <p className=" h-16 overflow-hidden "> {movie.release_date} </p>
        </section>
      </article>
    </>
  );
};
