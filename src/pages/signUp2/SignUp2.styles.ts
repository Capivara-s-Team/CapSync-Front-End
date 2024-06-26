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

    form {
      width: 496px;
    }

    label {
      color: #333;
      font-size: 16px;
    }
  `;

export const ContentInputs = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .teste {
    display: flex;
    align-items: flex-end;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }

    span:nth-of-type(1) {
      width: 11.7rem;
      margin-right: 1rem;
    }

    .label-input-phone {
      span:nth-of-type(1) {
        width: 6rem;
        margin-right: 0.5rem;
      }
    }
  }

  .question1,
  .question2,
  .select1,
  .select2,
  .select3,
  .select4 {
    display: flex;
    flex-direction: column;

    textarea {
      height: 7rem;
      border: none;
      background-color: #e4e4e4;
      padding: 8px;
      border-radius: 8px;
      color: #000;
      resize: none;
      font-size: 16px;

      &:focus {
      outline: none;
    }
    }
  }

  .select-squads {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    div {
      flex: 1;
    }

    select {
      height: 58px;
      border: none;
      background-color: #e4e4e4;
      padding: 10px;
      border-radius: 8px;
      color: #000;
      font-size: 16px;
    }
  }
`;

export const ContentButtons = styled.div`
  display: flex;
  gap: 1rem;

  margin-top: 2rem;
`;


