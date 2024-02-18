import { MovieCard } from "@/app/components/MovieCard";
import {
  IMAGE_URL,
  Movie,
  getMovieDetails,
  getRecommendatins,
} from "@/app/utils/request";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";

export default async function MovieDetails({ params }: { params: Params }) {
  const id = params.id.split("-")[0];
  const movie: Movie = await getMovieDetails(id);
  let recommendations = await getRecommendatins(id);
  recommendations = recommendations.splice(0, 2);
  return (
    <>
      <section
        className="w-full bg-center bg-cover "
        style={{
          backgroundImage: `url(${IMAGE_URL}/original/${movie?.backdrop_path})`,
        }}
      >
        <article className=" bg-black/60 backdrop-blur-sm  ">
          <div className="  md:grid grid-cols-4 gap-6 max-w-screen-xl mx-auto p-6  ">
            <div className="max-w-[300px] flex justify-center ">
              <img
                src={`${IMAGE_URL}/original/${movie.poster_path}`}
                alt={`${movie.title} image`}
                className=" w-[100%]"
              />
            </div>
            <div className="w-full space-y-6 md:col-span-2">
              <h2 className=" text-xl text-strong">
                {" "}
                {movie.title} <span>({movie.release_date.split("-")[0]})</span>{" "}
              </h2>
              <h3 className=" text-lg">Overview</h3>
              <p>{movie.overview}</p>

              <h3 className="text-lg">Production companies</h3>
              <div className="flex gap-6 ">
                {movie.production_companies?.map((production_company) => (
                  <div key={production_company.id}>
                    <img
                      src={`${IMAGE_URL}original${production_company.logo_path}`}
                      className="max-w-12 "
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <h2 className="text-lg">Recommendations</h2>
              <div className="grid grid-cols-2 gap-6">
                {recommendations.map((recommendation) => (
                  <MovieCard movie={recommendation} />
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
