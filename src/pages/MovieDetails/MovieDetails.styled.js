import styled from 'styled-components';

import { NavLink, Link } from 'react-router-dom';

export const MovieCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MovieCardBox = styled.div`
  padding: 20px;
`;

export const MoviePoster = styled.img`
  border-radius: 10px;
`;

export const MovieInfo = styled.span`
  margin-right: 30px;
  color: #235784;
  font-weight: 500;

  :last-child {
    margin-right: 0;
  }
`;

export const MovieBox = styled.div`
  margin-bottom: 10px;
`;

export const MovieOverview = styled.h3`
  margin: 40px 0 10px;
`;

export const MovieNav = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const MovieNavItem = styled.li`
  padding: 10px;
`;

export const MovieNavLink = styled(NavLink)`
  color: #235784;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  padding: 6px;

  &.active {
    border: 1px solid #235784;
    border-radius: 10px;
  }
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-bottom: 20px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
`;
