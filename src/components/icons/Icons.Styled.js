import styled from "styled-components";

export const IconsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &::after {
    content: "";
    display: block;
    height: 9rem;
    width: 1px;
    background-color: ${({ theme }) => theme.textCl};
    margin-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    &::after {
      display: none;
    }
    flex-direction: row;
    position: static;
  }
`;

export const IconsWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;
  a {
    display: inline-block;
    color: ${({ theme }) => theme.textCl};
    font-size: 2rem;
    padding: 1rem;
  }

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(#000, 0.2);
    color: ${({ theme }) => theme.textCl};
    background-color: ${({ theme }) => theme.textCl};

    a {
      color: ${({ theme }) => theme.backgroundCl};
    }

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(#000, 0.2);
  }
`;
