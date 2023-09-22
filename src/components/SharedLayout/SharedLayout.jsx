import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader, Container } from 'components';

import {
  StyledLink,
  StyledLogo,
  StyledNav,
  Header,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <StyledNav>
          <StyledLogo to="/">Filmoteka</StyledLogo>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </StyledNav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};
