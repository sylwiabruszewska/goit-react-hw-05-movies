import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviePoster = styled.img`
  border-radius: 10px;
  width: 200px;
  height: 300px;
  object-fit: cover;
`;

export const MovieTitle = styled.p`
  color: black;
  margin: 0;
  font-weight: 500;
  max-width: 200px;
`;

export const MovieCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  margin: 0 10px 20px;
`;

export const LinkToMovie = styled(Link)`
  text-decoration: none;
`;
