import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavbarContainer,
  NavbarContent,
  Logo,
  NavLinks,
  NavLink,
} from './Navbar.styles';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo>
          <Link to="/">Rick and Morty</Link>
        </Logo>
        <NavLinks>
          <NavLink as={Link} to="/characters" className={isActive('/characters') ? 'active' : ''}>
            Characters
          </NavLink>
          <NavLink as={Link} to="/episodes" className={isActive('/episodes') ? 'active' : ''}>
            Episodes
          </NavLink>
          <NavLink as={Link} to="/locations" className={isActive('/locations') ? 'active' : ''}>
            Locations
          </NavLink>
        </NavLinks>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;