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
  padding: 40px 0;

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

export const ContentInputs = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContentButtons = styled.div`
  display: flex;
  gap: 1rem;

  margin-top: 2rem;
`;