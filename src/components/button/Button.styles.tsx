import { ReactNode } from "react";
import styled from "styled-components";

interface ContentProps {
  color: string;
  textColor: string;
  width: number;
  children?: ReactNode;
}

const StyledDiv = styled.button<ContentProps>`
  width: ${(props) => props.width}rem;
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  border: none;
  text-align: center;
  font-size: 1rem;

  border-radius: 8px;
  cursor: pointer;
`;

export const Content = ({ color, textColor, width, children }: ContentProps) => {
  return (
    <StyledDiv color={color} textColor={textColor} width={width}>
      {children}
    </StyledDiv>
  );
};
