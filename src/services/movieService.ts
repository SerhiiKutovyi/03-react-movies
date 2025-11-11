import axios from 'axios';

import type { MoviesResponse } from '../types/movie';

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
