import styled from "styled-components";

export const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const LogoImg = styled.div`
  width: 7rem;
  svg {
    width: 100%;
    height: 100%;
    path,
    circle {
      stroke: ${({ theme }) => theme.backgroundCl};
    }
  }
`;

// extented from logoimg
export const BlackLogoImg = styled(LogoImg)`
  svg {
    path,
    circle {
      stroke: ${({ theme }) => theme.textCl};
    }
  }
`;
