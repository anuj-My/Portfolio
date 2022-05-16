import styled from "styled-components";

export const StyledMain = styled.main`
  padding: 0 15rem;
  margin: 0px auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    padding: 0 5rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0 1.5rem;
  }
`;
