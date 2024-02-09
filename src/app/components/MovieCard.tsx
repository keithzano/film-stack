import { MovieInList } from "../utils/request";
import Image from "next/image";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const MovieCard = ({ movie }: { movie: MovieInList }) => {
  return (
    <>
      <article className="  embla__slide  flex-shrink-0   ">
        <Image
          width={200}
          height={300}
          className=" rounded-lg "
          src={`${IMAGE_URL}${movie.poster_path}`}
          alt={`${movie.title} image`}
        />
        <section className=" p-4 space-y-4 ">
          <h2 className="text-md block  max-w-[160px] "> {movie.title} </h2>
          <p className=" h-16 overflow-hidden text-sm ">
            {" "}
            {movie.release_date}{" "}
          </p>
        </section>
      </article>
    </>
  );
};
