import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Logo = styled.img`
  height: auto;
  margin-top: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;

  width: fit-content;

  text-align: justify;
  color: #5c5a5a;
  font-size: 14px;

  h1 {
    text-align: center;
    font-size: 64px;
    font-weight: bold;

    span {
      background: linear-gradient(to right, #df6001, #e5b088);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    width: 320px;
    font-weight: bold;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.4rem;
  height: 100%;
  width: 100vw;
  margin: auto;
`;
