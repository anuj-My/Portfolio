import React from "react";
import { StyledNavLinks } from "./Navbar.styled";
import NavLinksList from "./NavLinksList";

function NavLinks() {
  return (
    <StyledNavLinks>
      <NavLinksList />
    </StyledNavLinks>
  );
}

export default NavLinks;
