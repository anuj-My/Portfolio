import React, { useState } from "react";
import whiteLogo from "../../assets/images/logoWhite.svg";
import logo from "../../assets/images/logoBlack.svg";
import NavLinks from "./NavLinks";
import { Logo } from "../logo/Logo";
import MobileNavigation from "./MobileNavigation";
import { NavbarWrapper, NavItemContainer, StyledBars } from "./Navbar.styled";
import { FlexSpaceBetween } from "../../styles/Flex.styled";

function Navbar() {
  const [showBars, setShowBars] = useState(true);
  const toggleBars = () => {
    setShowBars(!showBars);
  };
  const onClickClose = () => {
    setShowBars(true);
  };

  return (
    <>
      <NavbarWrapper>
        <NavItemContainer>
          <FlexSpaceBetween>
            <Logo path={logo} id="desktop" />
            <Logo path={whiteLogo} id="mobile" />
            <NavLinks />
          </FlexSpaceBetween>
        </NavItemContainer>
      </NavbarWrapper>
      {showBars && (
        <StyledBars onClick={toggleBars}>
          <span></span>
          <span></span>
          <span></span>
        </StyledBars>
      )}
      <MobileNavigation
        showBars={showBars}
        toggleBars={toggleBars}
        onClickClose={onClickClose}
      />
    </>
  );
}

export default Navbar;
