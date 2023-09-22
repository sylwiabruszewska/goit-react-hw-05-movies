import { Wrapper } from './Container.styled';
import PropTypes from 'prop-types';

export const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
