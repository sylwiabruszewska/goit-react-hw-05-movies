import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGZhZmZhNjZiYjA1ZTg4MWI3ZjNkZTBiMjY1YjMwYyIsInN1YiI6IjY0Yjk0ZGZiMTEzODZjMDEyZGYyODM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i5XjfMBV4oHEA6NUnudWFh467vN12yMmqPlu2RKuz-o';

const BASE_URL = 'https://api.themoviedb.org/3/';

const API_PATHS = {
  trendingMovies: 'trending/movie/day',
  searchMovie: 'search/movie',
  movieDetails: 'movie',
  movieCast: 'credits',
  movieReviews: 'reviews',
};

export const fetchData = async path => {
  try {
    const response = await axios.get(`${BASE_URL}` + path, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + API_KEY,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
  }
};

export const getTrendingMovies = async () => {
  const movies = await fetchData(`${API_PATHS.trendingMovies}`);
  return movies.results;
};

export const getMoviesByQuery = async query => {
  const movies = await fetchData(`${API_PATHS.searchMovie}?query=${query}`);
  return movies.results;
};

export const getMovieDetails = async movieId => {
  const movie = await fetchData(`${API_PATHS.movieDetails}/${movieId}`);

  if (movie.poster_path) {
    movie.poster_path = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;
  }

  return movie;
};

export const getMovieCast = async movieId => {
  const cast = await fetchData(
    `${API_PATHS.movieDetails}/${movieId}/${API_PATHS.movieCast}`
  );

  return cast.cast.map(cast => {
    if (cast.profile_path) {
      cast.profile_path = `http://image.tmdb.org/t/p/w200${cast.profile_path}`;
    }

    return cast;
  });
};

export const getMovieReviews = async movieId => {
  const reviews = await fetchData(
    `${API_PATHS.movieDetails}/${movieId}/${API_PATHS.movieReviews}`
  );

  return reviews.results.map(review => {
    if (review.author_details.avatar_path) {
      review.author_details.avatar_path = `http://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`;
    }
    return review;
  });
};
