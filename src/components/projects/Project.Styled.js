import styled from "styled-components";

export const ProjectContent = styled.div`
  display: grid;
  align-items: center;
  /* justify-content: center; */
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
  padding-bottom: 5rem;

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    text-transform: capitalize;
    letter-spacing: 0.5px;
  }
`;

const CardSide = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  top: 0;
  left: 0;
  height: 52rem;
  transition: all 0.8s ease;
  backface-visibility: hidden;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(#000, 0.15);
`;

export const CardFront = styled(CardSide)`
  background-color: ${({ theme }) => theme.textCl};
  color: ${({ theme }) => theme.backgroundCl};
`;

export const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
  color: ${({ theme }) => theme.backgroundCl};
  background-color: ${({ theme }) => theme.textCl};
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    margin: 2rem 0;
  }
  .card-details {
    padding: 3rem;
    ul {
      list-style: none;
      width: 80%;
      margin: 0 auto;
      li {
        text-align: center;
        font-size: 1.5rem;
        padding: 1rem;

        &:not(:last-child) {
          border-bottom: 1px solid #333;
        }
      }
    }
  }
`;

export const CardBackContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    text-align: center;
  }
  a:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const ProjectCard = styled.div`
  border-radius: 5px;
  position: relative;
  perspective: 50rem;
  -webkit-perspective: 50rem;
  -moz-perspective: 50rem;
  -ms-perspective: 50rem;
  height: 52rem;

  &:hover ${CardFront} {
    transform: rotateY(-180deg);
    cursor: pointer;
  }

  &:hover ${CardBack} {
    transform: rotateY(0deg);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 27rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  padding: 1.8rem;
`;
