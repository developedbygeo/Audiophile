import React from 'react';
import { NavLink } from 'react-router-dom';

import { BaseProps } from '../../shared/models/props.model';

const Nav = ({ className }: BaseProps) => {
  return (
    <nav className={className}>
      <div className="link-wrapper">
        <NavLink to="/headphones" className={({ isActive }) => (isActive ? 'active' : '')}>
          HEADPHONES
        </NavLink>
        <NavLink to="/speakers" className={({ isActive }) => (isActive ? 'active' : '')}>
          SPEAKERS
        </NavLink>
        <NavLink to="/earphones" className={({ isActive }) => (isActive ? 'active' : '')}>
          EARPHONES
        </NavLink>
      </div>
    </nav>
  );
};

Nav.displayName = 'Nav';

export default React.memo(Nav);
