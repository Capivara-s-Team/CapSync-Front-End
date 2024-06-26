import { Content } from "./Button.styles.tsx";
import { FaArrowRight } from "react-icons/fa";

interface ButtonProps {
  text: string;
  color: string;
  textColor: string;
  width: number;
  icon?: boolean;
}

export default function Button({ text, color, textColor, width, icon }: ButtonProps) {
  return (
    <Content color={color} textColor={textColor} width={width}>
      {text}
      {/* Deixe icon=true para aparecer o icon de seta */}
      {icon ? <FaArrowRight />  : undefined }
    </Content>
  );
}
