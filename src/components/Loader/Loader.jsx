import { Oval } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <Oval
        height={80}
        width={80}
        color="#8dc6ff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#0092ca"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </StyledLoader>
  );
};
