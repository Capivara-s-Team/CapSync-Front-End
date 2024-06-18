import { Content } from "./Button.styles.tsx"

interface ButtonProps {
  text: string,
  color: string,
  textColor: string,
  width: number
}

export default function Button( {text, color, textColor, width}: ButtonProps){
    return(
        <Content color={color} textColor={textColor} width={width}>
          {text}
        </Content>
    );
};