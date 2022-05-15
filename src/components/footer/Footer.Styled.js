import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.textCl};

  height: 10rem;

  a {
    color: ${({ theme }) => theme.backgroundCl};
    text-decoration: none;
  }
`;
