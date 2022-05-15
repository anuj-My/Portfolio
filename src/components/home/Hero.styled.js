import styled from "styled-components";

export const StyledHero = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  margin span {
    font-size: 2rem;
  }

  h1 {
    font-size: 6rem;
    padding-bottom: 0.5rem;
    opacity: 0.9;
    letter-spacing: 3px;
    text-transform: capitalize;
  }

  div {
    div {
      width: 40rem;
      min-width: 100%;

      /* @media screen and (max-width: 922px) {
        width: 50rem;
      } */
    }
  }

  div div {
    span {
      margin-bottom: 1.4rem;
      display: inline-block;
      font-size: 1.6rem;
      font-family: "Major Mono Display", monospace;
      font-weight: 600;
      opacity: 0.9;
    }
    p {
      padding-bottom: 2rem;
      font-size: 2rem;
    }
  }

  div div {
    h2 {
      font-size: 1.6rem;
      padding: 1rem 0 3rem 0;
      opacity: 0.7;
      font-size: 4rem;
      text-transform: capitalize;
    }
  }
`;
