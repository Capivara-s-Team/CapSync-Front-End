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
  width: 100%;
  height: 100%;
  padding: 40px 0;

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
