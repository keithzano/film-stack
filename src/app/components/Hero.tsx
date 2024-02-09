"use client";

import { Combobox } from "@headlessui/react";
import { useEffect, useState } from "react";
import { IMAGE_URL, MovieInList, searchMovies } from "../utils/request";
import Image from "next/image";

export const Hero = () => {
  const [movies, setMovies] = useState<MovieInList[]>([]);
  const [query, setQuery] = useState("");

  const changeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e?.target.value);
  };
  console.log(movies);

  useEffect(() => {
    const fetchData = async () => {
      const { results: movies }: { results: MovieInList[] } =
        await searchMovies(query);
      setMovies(movies);
    };
    fetchData();
  }, [query]);

  return (
    <article className="block space-y-6 absolute">
      <header className=" space-y-6 ">
        <h2 className=" text-6xl ">Welcome</h2>
        <h3 className="text-3xl">
          Millions of movies, Tv shows and people to discover. Explore now.
        </h3>
      </header>
      <Combobox>
        <div className="flex">
          <Combobox.Input
            onChange={changeQuery}
            value={query}
            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
          />
        </div>
        <Combobox.Options className=" space-y-6 relative bg-black/70 backdrop-blur p-4 overflow-y-auto h-[60vh] ">
          {movies.map((movie) => (
            <Combobox.Option
              key={movie.id}
              value={movie}
              className="relative bg-black/30 backdrop-blur p-4 rounded-lg "
            >
              <article className="flex gap-6 ">
                <figure className="max-w-[200px] w-[150px]">
                  <Image
                    src={`${IMAGE_URL}/w500/${movie.poster_path}`}
                    width={150}
                    height={225}
                    layout="responsive"
                    alt={`${movie.title} poster image`}
                    className="w-[100px]"
                  />
                </figure>
                <div className=" w-[100%] ">
                  <h2 className="text-xl">{movie.title}</h2>
                  <h4 className="text-md color-gre">{movie.release_date}</h4>
                  <p className="pt-4">{movie.overview}</p>
                </div>
              </article>
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </article>
  );
};
