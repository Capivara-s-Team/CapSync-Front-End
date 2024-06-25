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
  height: 85%;
  width: 100%;

  .btns {
    margin-top: 1.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    a {
      color: white;
      text-decoration: none;
    }
  }
`;

export const ThemeIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 16px;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
