import styled from "styled-components";

export const ContactContent = styled.div`
  form {
    padding: 2rem;
    background-color: ${({ theme }) => theme.textCl};
    margin: 2rem 0;
    border-radius: 5px;
  }
  .input-label-group label {
    font-size: 1.6rem;
  }
  .input-label-group {
    margin-bottom: 1rem;
  }

  .input-wrap {
    width: 100%;
    margin-right: 2rem;
  }

  .input-box {
    padding: 1rem;
    font-size: 1.6rem;
    margin-top: 0.3rem;
    width: 100%;
    border: none;
    border-radius: 5px;
    font-family: "poppins", sans-serif;
  }

  .input-box:focus {
    outline: none;
  }

  .textarea-group-wrap {
    margin-bottom: 2rem;
  }
  .textarea-group-wrap .input-wrap {
    height: 10rem;
    margin-right: 1rem;
  }

  .textarea-group-wrap textarea {
    height: 100%;
  }

  .textarea-group-wrap textarea:focus {
    outline: none;
  }
`;

export const ContactForm = styled.div`
  /* h4 {
    font-size: 3rem;
    font-family: "Major Mono Display", monospace;
  }
  display: flex;
  gap: 4rem;
  align-items: center; */
  padding: 0 10rem;

  @media screen and (max-width: 1150px) {
    padding: 0;
  }
`;

export const Modal = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.textCl};
  color: ${({ theme }) => theme.backgroundCl};
  padding: 1rem;
  padding: 4rem;
  text-align: center;
`;

export const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
