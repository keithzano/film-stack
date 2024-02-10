import {
  IMAGE_URL,
  Movie,
  MovieResponse,
  getMovieDetails,
} from "@/app/utils/request";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default async function MovieDetails({ params }: { params: Params }) {
  const id = params.id.split("-")[0];
  console.log("the id", id);
  const movie: Movie = await getMovieDetails(id);
  return (
    <>
      <section
        className="w-full "
        style={{
          backgroundImage: `url(${IMAGE_URL}/original/${movie?.backdrop_path})`,
        }}
      >
        <div className="w-full h-full relative"></div>
      </section>
    </>
  );
}
