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

  padding: 48px;
  display: flex;
  flex-direction: column;

  h1 {
    padding-bottom: 18px;
    border-bottom: 1px solid #e4e4e4;
    text-align: center;
  }

  label {
    margin-top: 36px;
  }

  .filter-input {

    background-color: #e4e4e4;
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 8px;
    width: 496px;
  
    input {
      background-color: transparent;
      flex: 1;
      height: 40px;
      border: 0;
      padding: 0 8px;
      color: #000;
      font-size: 16px;
  
      &:focus {
        outline: none;
      }
  }
`;