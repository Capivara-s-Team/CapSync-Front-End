import styled from "styled-components";

export const Span = styled.span`
  color: #f2f2f2;
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 8px;

  label {
    font-size: 14px;
  }
`;

export const InputContainer = styled.div`
  background-color: #e4e4e4;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  width: 100%;

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

export const IconWrapper = styled.div`
  color: #666360;
  margin: 0 2px 0 5px;
  display: flex;
  align-items: center;
  font-size: 20px;
`;
