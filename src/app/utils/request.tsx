const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_URL = "https://image.tmdb.org/t/p/";
const API_KEY = process.env.NEXT_PUBLIC_THE_MOVIE_DB;

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string | null;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_comapanies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface MovieResponse {
  movie: Movie;
}

export interface MovieInList {
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

export interface MovieListResponse {
  dates?: { maximum: string; minimum: string };
  page: number;
  results: MovieInList[];
  total_pages: number;
  total_results: number;
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getMovies = async (): Promise<MovieListResponse> => {
  try {
    const res: Response = await fetch(`${BASE_URL}/discover/movie`, options);
    if (!res.ok) {
      throw new Error(`Failed to fetch movies Status: ${res.status}`);
    }
    const data: MovieListResponse = await res.json();
    return data;
  } catch (error) {
    console.error("An error happened");
    throw error;
  }
};

export const searchMovies = async (
  query: string
): Promise<MovieListResponse> => {
  try {
    const res: Response = await fetch(
      `${BASE_URL}/search/movie?query=${query}`,
      options
    );

    if (!res.ok) {
      throw new Error(`Failded to search movies Status: ${res.status}`);
    }

    const data: MovieListResponse = await res.json();
    return data;
  } catch (erro) {
    console.error("An erro ocured while trying to search for movies");
    throw erro;
  }
};
