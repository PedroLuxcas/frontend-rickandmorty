import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderContainer, HeaderContent, Logo, Nav, NavLink } from "./Header.styles";

const Header: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo>
                    <Link to="/">Rick and Morty</Link>
                </Logo>

                <Nav>
                    <NavLink as={Link} to="/characters" $active={isActive('/characters')}>
                        Characters
                    </NavLink>
                    <NavLink as={Link} to="/episodes" $active={isActive('/episodes')}>
                        Episodes
                    </NavLink>
                    <NavLink as={Link} to="/locations" $active={isActive('/locations')}>
                        Locations
                    </NavLink>
                </Nav>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;