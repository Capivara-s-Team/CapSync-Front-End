import { ReactNode } from "react";
import styled from "styled-components";

interface ContentProps {
  color: string;
  textColor: string;
  width: number;
  type?: string;
  children?: ReactNode;
}

const StyledDiv = styled.button<ContentProps>`
  width: ${(props) => props.width}rem;
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};

  font-weight: bold;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  padding: 1rem;
  border: none;
  text-align: center;
  font-size: 1rem;

  border-radius: 8px;
  cursor: pointer;
`;

export const Content = ({
  color,
  textColor,
  type,
  width,
  children,
}: ContentProps) => {
  return (
    <StyledDiv color={color} textColor={textColor} width={width} type={type}>
      {children}
    </StyledDiv>
  );
};
