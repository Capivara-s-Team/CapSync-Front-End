import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(180deg, #f86b01 0%, #f8c787 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  justify-content: space-evenly;
  gap: 28px;

  padding: 56px 70px 48px;
  min-width: 520px;
  border-radius: 30px;

  h1 {
    font-size: 36px;
    color: #000;
  }

  .theme-dark {
    background: linear-gradient(180deg, #f86b01 0%, #000000 100%);
  }
`;
