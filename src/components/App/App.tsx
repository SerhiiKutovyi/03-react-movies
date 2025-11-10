import { useState } from 'react';

import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import css from './App.module.css';

import type { Movie, MoviesResponse } from '../../types/movie';

import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

function App() {
  const [movies, setMovie] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchMovies = async (username: string): Promise<void> => {
    try {
      setIsLoading(true);
      setIsError(false);
      setMovie([]);

      const { data } = await axios.get<MoviesResponse>('', {
        params: {
          query: `${username}`,
          include_adult: false,
          language: 'en-US',
          page: 1,
        },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${TMDB_TOKEN}`,
        },
      });

      if (data.results.length === 0) {
        toast('No movies found for your request.');
        return;
      } else {
        setMovie(data.results);
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={fetchMovies} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {movies.length > 0 && <MovieGrid movies={movies} />}
      <Toaster />
    </div>
  );
}

export default App;
