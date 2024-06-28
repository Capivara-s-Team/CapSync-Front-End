import { ReactNode } from "react";
import { Container } from "./CardForms.styles";

interface CardFormsProps {
  text?: string;
  className?: string;
  children: ReactNode;
}

export default function CardForms({
  text,
  className,
  children,
}: CardFormsProps) {
  return (
    <Container className={className}>
      <div className="title">
        {text ? <h1>Bichinhos da Ti</h1> : undefined}
        {text ? <p>{text}</p> : undefined}
      </div>
      {children}
    </Container>
  );
}
