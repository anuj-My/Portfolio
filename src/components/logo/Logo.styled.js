import styled from "styled-components";

export const LogoWrapper = styled.div`
  align-items: center;
  display: ${({ show }) => (show === "desktop" ? "flex" : "none")};

  @media screen and (max-width: 768px) {
    display: ${({ show }) => (show === "mobile" ? "flex" : "none")};
  }
`;

// extended LogoWrapper
export const NavLogoWrapper = styled(LogoWrapper)`
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const LogoImg = styled.div`
  width: 7rem;
  img {
    width: 100%;
  }
`;
