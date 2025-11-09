import { useState } from 'react';
import axios from 'axios';
import css from './App.module.css';

import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';

interface MovieProps {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

function App() {
  const [movies, setMovie] = useState<MovieProps[]>([]);

  console.log(movies);

  const fetchMovies = async (username: string) => {
    try {
      const { data } = await axios.get<MovieProps>('', {
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
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={fetchMovies} />
      <MovieGrid movies={movies} />
    </div>
  );
}

export default App;
