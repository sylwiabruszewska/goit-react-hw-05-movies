import { useState, useEffect } from 'react';
import { MovieList, Loader } from 'components';
import { getMoviesByQuery } from 'services/api';

import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchBar,
} from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const onSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.query.value;
    setQuery(query);
    form.reset();
  };

  useEffect(() => {
    getMoviesByQuery(query)
      .then(movies => {
        setMovies(movies);
      })
      .catch(error => {
        console.error('Błąd podczas pobierania danych filmu:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <SearchBar>
        <SearchForm onSubmit={onSubmit}>
          <SearchInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <SearchButton>Search</SearchButton>
        </SearchForm>
      </SearchBar>
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
