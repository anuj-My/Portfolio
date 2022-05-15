import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 5rem 0;
  display: grid;
  align-items: center;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 5rem;
`;
export const HeadingPrimary = styled.h1`
  font-size: 4rem;
  font-family: "Major Mono Display", monospace;

  &::after {
    content: "";
    display: block;
    width: 4.5rem;
    height: 5px;
    margin-top: 3px;
    background-color: ${({ theme }) => theme.textCl};
    border-radius: 5px;
  }
`;

export const Divider = styled.div`
  width: 30%;
  height: 1px;
  margin-top: 3px;
  background-color: ${({ theme }) => theme.textCl};
  opacity: 0.3;
`;
