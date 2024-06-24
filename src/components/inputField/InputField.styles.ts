import styled from "styled-components";

export const Span = styled.span`
  color: #79797b;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  label {
    font-size: 14px;
    font-weight: bold;
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
  margin-right: 8px;
  display: flex;
  align-items: center;
  font-size: 20px;
`;
