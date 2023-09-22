import { useLocation } from 'react-router-dom';
import { MoviePoster, MovieCard, MovieTitle } from './MovieItem.styled';
import noPoster from 'images/no-poster-available.jpg';
import { LinkToMovie } from './MovieItem.styled';
import PropTypes from 'prop-types';

export const MovieItem = ({ movie }) => {
  const { pathname, search } = useLocation();

  const { title, poster_path, id } = movie;
  return (
    <MovieCard>
      <LinkToMovie to={`/movies/${id}`} state={{ from: pathname + search }}>
        {poster_path ? (
          <MoviePoster
            src={`http://image.tmdb.org/t/p/w200${poster_path}`}
            alt={title}
          />
        ) : (
          <MoviePoster src={noPoster} alt="Placeholder" />
        )}

        <MovieTitle>{title}</MovieTitle>
      </LinkToMovie>
    </MovieCard>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
};
