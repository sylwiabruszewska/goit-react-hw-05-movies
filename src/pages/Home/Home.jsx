import { useState, useEffect } from 'react';
import { MovieSlider, Loader } from 'components';
import { getTrendingMovies } from 'services/api';
import { Heading } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTrendingMovies()
      .then(movies => {
        setMovies(movies);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Heading>Trending</Heading>
      <MovieSlider movies={movies} />
    </>
  );
};

export default Home;
