import React from 'react';
import { NavLink } from 'react-router-dom';

import { BaseProps } from 'shared/models/props.model';
import { StyledDesktopNav } from './Nav.styled';

const Nav = ({ className }: BaseProps) => {
  return (
    <StyledDesktopNav className={className}>
      <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>
        HOME
      </NavLink>
      <NavLink to="/headphones" className={({ isActive }) => (isActive ? 'active' : '')}>
        HEADPHONES
      </NavLink>
      <NavLink to="/speakers" className={({ isActive }) => (isActive ? 'active' : '')}>
        SPEAKERS
      </NavLink>
      <NavLink to="/earphones" className={({ isActive }) => (isActive ? 'active' : '')}>
        EARPHONES
      </NavLink>
    </StyledDesktopNav>
  );
};

Nav.displayName = 'Nav';

export default React.memo(Nav);
