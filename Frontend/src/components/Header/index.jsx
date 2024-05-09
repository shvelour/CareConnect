import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavbarContainer = styled.nav`
width: 100%;
height: 60px;
background-color: #e4c59e;
display: flex;
align-items: center;
justify-content: center;
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 10px;
  &:hover {
    color: #555;
  }
  &.active {
    color: #555;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <StyledLink exact to="/">
        Home
      </StyledLink>
      <StyledLink to="/volunteers">Volunteers</StyledLink>
      <StyledLink to="/hostel">Hostel</StyledLink>
    </NavbarContainer>
  );
};

export default Navbar;