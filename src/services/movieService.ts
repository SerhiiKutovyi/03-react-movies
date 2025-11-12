import axios from 'axios';

import type { Movie } from '../types/movie';

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

async function fetchMovies(query: string): Promise<MoviesResponse> {
  const { data } = await axios.get<MoviesResponse>('', {
    params: {
      query: `${query}`,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  });
  return data;
}

export default fetchMovies;
