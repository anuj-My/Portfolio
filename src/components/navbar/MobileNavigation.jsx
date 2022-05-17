import React from "react";
import {
  MobileNavWrapper,
  CloseBars,
  MobileNavLinks,
  Column,
} from "./Navbar.styled";
import { Container } from "../../styles/container.styled";
import { SliderLogo } from "../logo/Logo";
import NavLinksList from "./NavLinksList";

export default function MobileNavigation({
  showBars,
  toggleBars,
  onClickClose,
}) {
  return (
    <MobileNavWrapper showBars={showBars}>
      {showBars || (
        <CloseBars onClick={toggleBars}>
          <span></span>
          <span></span>
          <span></span>
        </CloseBars>
      )}
      <Container className="mobileNavContainer">
        <Column showBars={showBars}>
          <SliderLogo />
          <MobileNavLinks>
            <NavLinksList onClickClose={onClickClose} />
          </MobileNavLinks>
        </Column>
      </Container>
    </MobileNavWrapper>
  );
}
