import axios from 'axios';
import css from './App.module.css';

import SearchBar from '../SearchBar/SearchBar';

export interface Movie {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

function App() {
  // const myKey = import.meta.env.VITE_TMDB_TOKEN;

  // axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';

  const fetchMovies = async (username: string) => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1',
      {
        params: {
          query: `${username}`,
        },
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmRlOGMwNTkyMGE2NjQ1NGU1MWZiMWYyNzdjNmQ1MiIsIm5iZiI6MTc2MjUyMjU1Ni42MzkwMDAyLCJzdWIiOiI2OTBkZjViYzlmNTNiZTJlMDA0YzcxZDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YA55gdslOs4xZrrzEszn_y7zyAIzJYcN50G6wf-52gg',
        },
      }
    );
    console.log(response);
    console.log('qweqwewq');
    console.log(username);

    return response;
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={fetchMovies} />
    </div>
  );
}

export default App;
