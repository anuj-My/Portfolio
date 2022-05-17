import styled, { keyframes } from "styled-components";

export const NavbarWrapper = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  align-items: center;
  transition: transform 0.3s ease-in;
  transform: translateY(${({ scroll }) => (scroll ? 0 : -9)}rem);
  color: ${({ theme }) => theme.backgroundCl};
  background-color: ${({ theme }) => theme.textCl};
  height: 9rem;
  z-index: 1;

`;

const topToBottom = keyframes`
from {
  transform: translateY(-100%);
}
to {
  transform: translateY(0);
}
`;

const bottomToTop = keyframes`
from {
  transform: translateY(0);
  height: 100vh;
}
to {
  transform: translateY(-100%);
  height: 0;
}
`;

// extended from NavbarWrapper
export const MobileNavWrapper = styled(NavbarWrapper)`
  display: none;
  transition: none;
  transform: none;
  @media screen and (max-width: 768px) {
    animation: ${({ showBars }) => (showBars ? bottomToTop : topToBottom)} 0.3s
      ease;
    height: ${({ showBars }) => (showBars ? 0 : 100)}vh;
    background-color: ${({ theme }) => theme.backgroundCl};
    display: flex;
    align-items: flex-start;

    div:last-child {
      transform: translateY(${({ showBars }) => showBars && -200}%);
    }
    .mobileNavContainer {
      height: 50%;
      margin-top: 6rem;
      transform: translateY(${({ showBars }) => showBars && -200}%);

      div div {
        transform: translateY(${({ showBars }) => showBars && -200}%);
      }
      nav {
        transform: translateY(${({ showBars }) => showBars && -200}%);
      }
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  transform: translateY(${({ showBars }) => showBars && -200}%);
`;

export const NavItemContainer = styled.div`
  width: 150rem;
  min-width: 100%;
  margin: 0 auto;
  padding: 0 4rem;
`;

export const StyledNavLinks = styled.nav`
  ul {
    display: flex;
    gap: 0rem;
    align-items: center;
    list-style: none;

    li a {
      &:link,
      &:visited {
        display: inline-block;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.backgroundCl};
        font-weight: 300;
        border-radius: 0.5rem;
        padding: 1rem 2rem;
        text-transform: uppercase;
        text-decoration: none;
        background-image: linear-gradient(
          120deg,
          transparent 0%,
          transparent 50%,
          ${({ theme }) => theme.backgroundCl} 50%
        );
        background-size: 230%;
        transition: all 0.3s ease;
      }

      &:hover {
        background-position: 100%;
        color: ${({ theme }) => theme.textCl};
        transform: translateX(1rem);
      }
    }
  }

  // Resume link
  /* li:last-child {
    background-color: #000;
    border-radius: 5px;
    margin-left: 1rem;
    border: 2px solid #fff;
    transition: all 0.4s ease-out;
    a {
      transition: all 0.4s ease-out;
      color: #fff;
      padding: 1.4rem 2rem;
    }

    &:hover {
      background-color: #fff;
      border: 2px solid #000;
      a {
        color: #000;
      }
    }
  } */

  @media screen and (max-width: 768px) {
    ul {
      display: none;
    }
  }
`;

// extend from StyledNavLinks

export const MobileNavLinks = styled(StyledNavLinks)`
  ul {
    flex-direction: column;
    gap: 1.6rem;
    justify-content: center;
    align-items: center;

    li a {
      &:link,
      &:visited {
        font-size: 2rem;
        background-image: linear-gradient(
          120deg,
          transparent 0%,
          transparent 50%,
          ${({ theme }) => theme.textCl} 50%
        );
        color: ${({ theme }) => theme.textCl};
      }
      &:hover {
        color: ${({ theme }) => theme.backgroundCl};
      }
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      display: flex;
    }
  }
`;

export const StyledBars = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    position: fixed;
    right: 2rem;
    top: 2rem;
    z-index: 100;
    width: 4.5rem;
    height: 4.5rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    transform: translateY(${({ scroll }) => (scroll ? 0 : -9)}rem);
    gap: 0.5rem;
    justify-content: center;
    cursor: pointer;
    transition: transform cubic-bezier(0.68, -0.55, 0.265, 1.55) 1s;

    &:hover {
      transform: rotate(45deg);
    }

    span {
      border-radius: 5px;
      background-color: ${({ theme }) => theme.backgroundCl};
      width: 100%;
      height: 100%;
      height: 0.4rem;
    }
    span:nth-child(2) {
      display: none;
    }
  }
`;

const animateLeft = keyframes`
  from {
    transform: rotatez(0deg) translate(0px, 0px);
  }
  to{
    transform: rotatez(45deg) translate(2px, 2px);
  }
  
  `;

const animateRight = keyframes`
  from {
    transform: rotatez(0deg) translate(0px, 0px);
  }
  to{
    transform: rotatez(-45deg) translate(4px, -4px);
  }
  `;

export const CloseBars = styled(StyledBars)`
  transform: scale(0.8);
  transition: all 1s ease;
  &:hover {
    transform: none;
    transform: scale(0.9);
  }
  span {
    background-color: ${({ theme }) => theme.textCl};
    animation: cross 3s ease;
  }

  span:nth-child(1) {
    animation: ${animateLeft} 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    animation-delay: 0.25s;
    transform: rotatez(45deg) translate(2px, 2px);
  }

  span:nth-child(3) {
    animation: ${animateRight} 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    animation-delay: 0.25s;
    transform: rotatez(-45deg) translate(4px, -4px);
  }
`;
