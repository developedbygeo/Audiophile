import { useLocation } from 'react-router-dom';

import { BigHeading } from 'components/UI/Text.styled';
import { StyledBanner } from './PageBanner.styled';

const PageBanner = () => {
  const { pathname } = useLocation();
  const formattedPath = pathname.slice(1).toUpperCase();

  return (
    <StyledBanner>
      <BigHeading>{formattedPath}</BigHeading>
    </StyledBanner>
  );
};

export default PageBanner;
