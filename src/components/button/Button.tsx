import { Content } from "./Button.styles.tsx";
import { FaArrowRight } from "react-icons/fa";

interface ButtonProps {
  text: string;
  color: string;
  textColor: string;
  width: number;
  type?: string;
  icon?: boolean;
}

export default function Button({
  text,
  color,
  textColor,
  width,
  type,
  icon,
}: ButtonProps) {
  return (
    <Content color={color} textColor={textColor} width={width} type={type}>
      {text}
      {/* Deixe icon=true para aparecer o icon de seta */}
      {icon ? <FaArrowRight /> : undefined}
    </Content>
  );
}
