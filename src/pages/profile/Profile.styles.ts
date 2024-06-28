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
  width: 600px;
  padding-top: 52px;
  display: flex;

  form {
      width: 496px;
    }

  .circle {
    background-color: #000;
    color: #fff;
    font-size: 30px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 2rem;

    p {
      text-align: center;
      margin-top: 42px;
    }
  }

  .name-lastname {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    
    span {
      width: 15rem;
    }
  }

  
`;

export const ContentInputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

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
`;

export const ContentButtons = styled.div`
  display: flex;
  gap: 1rem;

  margin-top: 2rem;
`;