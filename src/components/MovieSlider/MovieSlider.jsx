import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MovieItem } from '../index';
import PropTypes from 'prop-types';

export const MovieSlider = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    variableWidth: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {movies.map(movie => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </Slider>
    </div>
  );
};

MovieSlider.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
