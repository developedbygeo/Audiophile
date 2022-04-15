import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useWindow from 'hooks/useWindow';

import { GoThreeBars, GoX } from 'react-icons/go';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ReactComponent as Logo } from 'assets/logo.svg';

import { UnstyledButton } from 'components/UI/Button.styled';
import { StyledHeader } from './Header.styled';
import MobileNav from './MobileNav';
import Nav from './Nav';

const Header = () => {
  const width = useWindow();
  const { pathname } = useLocation();
  const [navIsEnabled, setNavIsEnabled] = useState(false);
  const navClass = width < 768 ? 'mobile-nav' : 'desktop-nav';

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setNavIsEnabled(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  const navToggleHandler = () => {
    setNavIsEnabled((prevState) => !prevState);
  };

  const buttonContent = !navIsEnabled ? <GoThreeBars /> : <GoX />;

  const shouldButtonRender = width < 768 && (
    <UnstyledButton onClick={navToggleHandler} title="Toggle Menu" className="menu">
      {buttonContent}
    </UnstyledButton>
  );

  return (
    <StyledHeader>
      {shouldButtonRender}
      <Link to="/home" aria-label="Return to home">
        <Logo className="logo" role="img" aria-label="logo" />
      </Link>
      <UnstyledButton className="cart" title="Toggle Cart">
        <AiOutlineShoppingCart />
      </UnstyledButton>
      {width < 768 ? navIsEnabled && <MobileNav /> : <Nav className={navClass} />}
    </StyledHeader>
  );
};

export default Header;
