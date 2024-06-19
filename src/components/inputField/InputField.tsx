import { BiSearch } from "react-icons/bi";
import { IconWrapper, Span } from "./InputField.styles";
import { FaDiscord, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail, MdOutlineLock } from "react-icons/md";

interface InputFieldProps {
  id: string;
  type: string;
  label: string;
  placeHolder: string;
  input?: "Linkedin" | "Discord" | "Telefone" | "Email" | "Senha" | "search";
}
export function InputField({ id, type, label, placeHolder, input }: InputFieldProps) {
  const InputIcon = () => {
    switch (input) {
      case "Linkedin":
        return <FaLinkedin />;
      case "Discord":
        return <FaDiscord />;
      case "Telefone":
        return <FaPhoneAlt />;
      case "Email":
        return <MdOutlineMail />;
      case "Senha":
        return <MdOutlineLock />;
      case "search":
        return <BiSearch />;
      default:
        return "";
    }
  };

  return (
    <Span>
      {label}
      <div>
        <IconWrapper>{InputIcon()}</IconWrapper>
        <input id={id} type={type} placeholder={placeHolder} />
      </div>
    </Span>
  );
}
