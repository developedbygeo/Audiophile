import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useWindow from 'hooks/useWindow';

import { disableScroll } from 'utils/utilitiesUI';

import { GoThreeBars, GoX } from 'react-icons/go';
import { ReactComponent as Logo } from 'assets/logo.svg';

import { BaseProps } from 'shared/models/props.model';
import { UnstyledButton } from 'components/UI/Button.styled';
import { StyledHeader } from './Header.styled';
import MobileNav from './MobileNav';
import Nav from './Nav';
import CartButton from './CartButton';

const Header = ({ className }: BaseProps) => {
  const width = useWindow();
  const { pathname } = useLocation();
  const [navIsEnabled, setNavIsEnabled] = useState(false);
  const navClass = width < 1028 ? 'mobile-nav' : 'desktop-nav';

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setNavIsEnabled(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (width < 450) disableScroll(navIsEnabled);
  }, [width, navIsEnabled]);

  const navToggleHandler = useCallback(() => setNavIsEnabled((prevState) => !prevState), []);

  const buttonContent = !navIsEnabled ? <GoThreeBars /> : <GoX />;

  const shouldButtonRender = width < 1024 && (
    <UnstyledButton onClick={navToggleHandler} title="Toggle Menu" className="menu">
      {buttonContent}
    </UnstyledButton>
  );

  return (
    <StyledHeader className={className}>
      {shouldButtonRender}
      <Link className="logo-wrapper" to="/home" aria-label="Return to home">
        <Logo className="logo" role="img" aria-label="logo" />
      </Link>
      <CartButton />
      {width < 1024 ? navIsEnabled && <MobileNav /> : <Nav className={navClass} />}
    </StyledHeader>
  );
};

export default Header;
