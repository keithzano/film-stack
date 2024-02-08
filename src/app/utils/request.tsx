const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.THE_MOVIE_DB;

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getMovies = async (): Promise<Movie[]> => {
  try {
    const response: Response = await fetch(
      `${BASE_URL}/discover/movie`,
      options
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch movies Status: ${response.status}`);
    }
    const data = await response.json();
    const movies: Movie[] = data.results;
    return movies;
  } catch (error) {
    console.error("An error happened");
    throw error;
  }
};
