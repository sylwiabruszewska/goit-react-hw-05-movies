import { MovieItem } from '../index';
import { StyledList } from './MovieList.styled';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  return (
    <StyledList>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </StyledList>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
