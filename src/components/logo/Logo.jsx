import React from "react";
import { NavLogoWrapper, LogoWrapper, LogoImg } from "./Logo.styled";

export const Logo = ({ path, id }) => {
  return (
    <LogoWrapper show={id}>
      <LogoImg>
        <img src={path} alt="logo" />
      </LogoImg>
    </LogoWrapper>
  );
};

export const NavLogo = ({ path }) => {
  return (
    <NavLogoWrapper>
      <LogoImg>
        <img src={path} alt="logo" />
      </LogoImg>
    </NavLogoWrapper>
  );
};
