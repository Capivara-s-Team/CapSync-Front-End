import { ReactNode } from "react";
import { Container } from "./CardForms.styles";

interface CardFormsProps {
  text: string;
  className: string;
  children: ReactNode;
}

export default function CardForms({
  text,
  className,
  children,
}: CardFormsProps) {
  return (
    <Container className={className}>
      <h1>Bichinhos da TI</h1>
      <p>{text}</p>
      {children}
    </Container>
  );
}
