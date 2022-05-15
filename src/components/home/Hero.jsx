import React from "react";
import { StyledHero } from "./Hero.styled";
import { Container } from "../../styles/container.styled";
import { AnchorButtonBlack } from "../../styles/Button.styled";

function Hero() {
  return (
    <>
      <StyledHero id="home">
        <Container>
          <div>
            <span>Hi! my name is</span>
            <h1>Anuj Maurya</h1>
            <h2>A Passionate Front-end Developer</h2>
            <p>
              I'm a self-taught front-end developer and also familiar with UI
              Designing. Looking for an opportunity to apply creative, problem
              solving and communicative skills on a development team.
            </p>
            <AnchorButtonBlack href="#contact" rel="noreferrer">
              Get in touch
            </AnchorButtonBlack>
          </div>
        </Container>
      </StyledHero>
    </>
  );
}

export default Hero;
