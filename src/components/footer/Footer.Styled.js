import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.textCl};
  padding: 2rem 0;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  p {
    color: ${({ theme }) => theme.backgroundCl};
  }
  a {
    /* color: ${({ theme }) => theme.backgroundCl}; */
    text-decoration: none;
  }
`;
