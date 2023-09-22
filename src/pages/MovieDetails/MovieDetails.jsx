import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';

import { getMovieDetails } from 'services/api';
import { HiArrowLeft } from 'react-icons/hi';
import { Loader } from 'components';

import {
  MovieCardWrapper,
  MoviePoster,
  MovieInfo,
  MovieBox,
  MovieOverview,
  MovieNav,
  MovieNavItem,
  MovieNavLink,
  BackLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const outletRef = useRef(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId)
      .then(movieData => {
        setMovie(movieData);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  const scrollToSection = () => {
    if (outletRef.current) {
      setTimeout(() => {
        outletRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  const { title, release_date, vote_average, genres, overview, poster_path } =
    movie;

  return (
    <>
      <BackLink to={backLinkHref}>
        <HiArrowLeft size="24" />
        Go back
      </BackLink>
      <MovieCardWrapper>
        <div>
          <MoviePoster src={poster_path} alt={title} />
        </div>
        <div>
          <h2>
            {title} ({release_date.slice(0, 4)})
          </h2>
          <div>
            <MovieBox>
              <MovieInfo>{release_date}</MovieInfo>
              <MovieInfo>{genres.map(genre => genre.name + ' ')}</MovieInfo>
              <MovieInfo>User score: {vote_average.toFixed(1)} </MovieInfo>
            </MovieBox>

            <MovieOverview>Overview</MovieOverview>
            <p>{overview}</p>
          </div>
        </div>
      </MovieCardWrapper>
      <MovieNav ref={outletRef}>
        <MovieNavItem>
          <MovieNavLink
            to="cast"
            state={{ from: backLinkHref }}
            onClick={scrollToSection}
          >
            Cast
          </MovieNavLink>
        </MovieNavItem>
        <MovieNavItem>
          <MovieNavLink
            to="reviews"
            state={{ from: backLinkHref }}
            onClick={scrollToSection}
          >
            Reviews
          </MovieNavLink>
        </MovieNavItem>
      </MovieNav>
      <hr />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
