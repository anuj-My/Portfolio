import styled, { keyframes } from "styled-components";

export const StyledAbout = styled.div`
  display: flex;
  align-items: center;

  .about-content {
    width: clamp(500px, 70%, 80rem);
  }

  /* @media screen and (max-width: 410px) {
    font-size: 2.5rem;
  } */
`;

export const InfiniteScrollBar = styled.div`
  padding: 16px;
  margin-top: 10rem;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 15rem;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.backgroundCl},
      rgba(255, 255, 255, 0) 80px,
      rgba(255, 255, 255, 0) calc(100% - 80px),
      ${({ theme }) => theme.backgroundCl}
    );
  }
`;

const marquee = keyframes`
 0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const ScrollWrapper = styled.div`
  display: flex;
  -webkit-animation: ${marquee} 20s linear infinite;
  animation: ${marquee} 20s linear infinite;
`;

export const IconWrapper = styled.div`
  width: 8rem;
  height: 5rem;
  font-size: 13rem;
  text-align: center;
  display: flex;
  align-items: center;
  margin: 0 5.5rem;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
