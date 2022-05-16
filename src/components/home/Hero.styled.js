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

    @media screen and (max-width: 1278px) {
      font-size: 4rem;
    }

    @media screen and (max-width: 410px) {
      font-size: 3rem;
    }
  }

  div {
    div {
      width: clamp(220px, 90%, 80rem);
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

      @media screen and (max-width: 410px) {
        font-size: 1.4rem;
      }
    }
    p {
      padding-bottom: 3rem;
      font-size: 2rem;

      @media screen and (max-width: 1278px) {
        font-size: 1.6rem;
      }

      @media screen and (max-width: 410px) {
        font-size: 1.4rem;
      }
    }
  }

  div div {
    h2 {
      padding: 1rem 0 3rem 0;
      opacity: 0.7;
      font-size: 4rem;
      text-transform: capitalize;

      @media screen and (max-width: 1278px) {
        font-size: 3rem;
      }

      @media screen and (max-width: 410px) {
        font-size: 2rem;
      }
    }
  }
`;
