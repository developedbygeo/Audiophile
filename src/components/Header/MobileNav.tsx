import useWindowWidth from 'hooks/useWindow';
import { derivedViewport } from 'utils/utilities';

import Categories from 'components/Categories/Categories';
import { StyledMobileNav } from './Nav.styled';

const MobileNav = () => {
  const width = useWindowWidth();
  const viewport = derivedViewport(width);
  return (
    <StyledMobileNav>
      <Categories className={`${viewport}-nav`} />
    </StyledMobileNav>
  );
};

export default MobileNav;
