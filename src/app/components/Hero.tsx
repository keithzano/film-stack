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
    <section className="p-6 max-w-screen-xl min-h-80  ">
      <article className="block space-y-6">
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
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
            />
          </div>
          <Combobox.Options className=" space-y-6">
            {movies.map((movie) => (
              <Combobox.Option value={movie}>
                <article className="flex gap-6">
                  <figure className="max-w-[120px] w-[100px]">
                    <Image
                      src={`${IMAGE_URL}/w300/${movie.poster_path}`}
                      width={100}
                      height={150}
                      alt={`${movie.title} poster image`}
                    />
                  </figure>
                  <div>
                    <h2 className="text-xl">{movie.title}</h2>
                    <h4 className="text-md color-gre">{movie.release_date}</h4>
                    <p>{movie.overview}</p>
                  </div>
                </article>
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
      </article>
    </section>
  );
};
