import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (username: string) => Promise<void>;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handelSubmit = (formData: FormData) => {
    const username = formData.get('query') as string;

    if (!username) {
      toast('Please enter your search query');
      return;
    }

    onSubmit(username);
  };

  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <a
            className={css.link}
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by TMDB
          </a>
          <form className={css.form} action={handelSubmit}>
            <input
              className={css.input}
              type="text"
              name="query"
              autoComplete="off"
              placeholder="Search movies..."
              autoFocus
            />
            <button className={css.button} type="submit">
              Search
            </button>
            <Toaster />
          </form>
        </div>
      </header>
    </>
  );
}
