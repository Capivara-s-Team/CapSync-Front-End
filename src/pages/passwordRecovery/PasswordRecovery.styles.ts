import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100%;
  padding: 40px 0;

  .input {
    display: flex;
    flex-direction: column;

    label {
      color: white;
    }

    input {
      padding: 0.8rem;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      border: 0;
      color: #000;
      font-size: 16px;

      &:focus {
        outline: none;
      }
    }
  }

  .btns {
    margin-top: 1.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    button:hover {
      opacity: 0.8;
      transition: opacity 0.4s;
    }

    a {
      color: white;
      text-decoration: none;
    }
  }
`;
