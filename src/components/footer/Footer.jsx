import React from "react";
import { StyledFooter } from "./Footer.Styled";
import { Logo } from "../logo/Logo";

function Footer() {
  return (
    <StyledFooter>
      <div>
        <a href="#home" rel="noreferrer">
          <Logo />
        </a>
        <p>Built and Design by Anuj Maurya.</p>
      </div>
    </StyledFooter>
  );
}

export default Footer;
