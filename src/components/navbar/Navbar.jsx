import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { Logo } from "../logo/Logo";
import MobileNavigation from "./MobileNavigation";
import { NavbarWrapper, NavItemContainer, StyledBars } from "./Navbar.styled";
import { FlexSpaceBetween } from "../../styles/Flex.styled";

function Navbar() {
  const [onScroll, setOnScroll] = useState(true);
  const [showBars, setShowBars] = useState(true);

  let lastScrollY = window.scrollY;

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setOnScroll(false);
    } else {
      setOnScroll(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });

  const toggleBars = () => {
    setShowBars(!showBars);
  };
  const onClickClose = () => {
    setShowBars(true);
  };

  return (
    <>
      <NavbarWrapper scroll={onScroll}>
        <NavItemContainer>
          <FlexSpaceBetween>
            <Logo />
            <NavLinks />
          </FlexSpaceBetween>
        </NavItemContainer>
      </NavbarWrapper>

      {showBars && (
        <StyledBars onClick={toggleBars} scroll={onScroll}>
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
