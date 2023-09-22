import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';
import { Loader } from 'components';
import placeholder from 'images/avatar_placeholder.jpg';

import {
  CastList,
  CastListItem,
  CastPhoto,
  CastInfo,
  CastInfoName,
  CastInfoChar,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovieCast(movieId)
      .then(movieData => {
        setCast(movieData);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <CastList>
        {cast.map(({ name, character, id, profile_path }) => (
          <CastListItem key={id}>
            {profile_path ? (
              <CastPhoto src={profile_path} alt={name} />
            ) : (
              <CastPhoto src={placeholder} alt="Placeholder" />
            )}

            <CastInfo>
              <CastInfoName>{name}</CastInfoName>
              <CastInfoChar>{character}</CastInfoChar>
            </CastInfo>
          </CastListItem>
        ))}
      </CastList>
    </div>
  );
};

export default Cast;
