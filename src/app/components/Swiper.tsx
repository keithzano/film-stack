"use client";
import useEmblaCarousel from "embla-carousel-react";
import { MovieCard } from "./MovieCard";
import { MovieInList } from "../utils/request";

export const Swiper = ({ movies }: { movies: MovieInList[] }) => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className=" max-w-screen-xl overflow-x-hidden mx-auto " ref={emblaRef}>
      <div className="  flex gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
