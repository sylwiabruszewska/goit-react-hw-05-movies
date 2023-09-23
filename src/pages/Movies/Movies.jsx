import { useState, useEffect } from 'react';
import { MovieList, Loader } from 'components';
import { getMoviesByQuery } from 'services/api';
import { useSearchParams } from 'react-router-dom';

import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchBar,
} from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const onSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchQuery = form.elements.query.value;
    setSearchParams({ query: searchQuery });
    form.reset();
  };

  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true);
      getMoviesByQuery(searchQuery)
        .then(movies => {
          setMovies(movies);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [searchQuery]);

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
