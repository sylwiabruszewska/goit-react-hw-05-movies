import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Header = styled.header`
  background-color: #235784;
  padding: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(NavLink)`
  color: white;
  padding: 10px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  padding: 6px;

  &.active {
    border: 2px solid #8dc6ff;
    border-radius: 10px;
    color: #8dc6ff;
  }
`;

export const StyledLogo = styled(Link)`
  font-size: 36px;
  text-decoration: none;
  color: black;
  margin-right: 20px;
  font-weight: bold;
  text-transform: uppercase;

  background-image: linear-gradient(45deg, #8dc6ff, #0092ca);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;
