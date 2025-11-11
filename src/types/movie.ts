export interface Movie {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface ModalProps {
  onClose: () => void;
  movie: Movie;
}

export interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export interface SearchBarProps {
  onSubmit: (username: string) => Promise<void>;
}
