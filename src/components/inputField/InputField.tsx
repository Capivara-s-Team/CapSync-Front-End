import { BiSearch, BiUser } from "react-icons/bi";
import { IconWrapper, InputContainer, Span } from "./InputField.styles";
import { FaDiscord, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail, MdOutlineLock } from "react-icons/md";

interface InputFieldProps {
  id?: string;
  type: string;
  label: string;
  placeHolder?: string;
  value?: string[];
  icon?: "Linkedin" | "Discord" | "Phone" | "Email" | "Password" | "User" | "Search";
}

export function InputField({ id, type, label, placeHolder, icon, value }: InputFieldProps) {
  const InputIcon = () => {
    switch (icon) {
      case "Linkedin":
        return <FaLinkedin />;
      case "Discord":
        return <FaDiscord />;
      case "Phone":
        return <FaPhoneAlt />;
      case "Email":
        return <MdOutlineMail />;
      case "Password":
        return <MdOutlineLock />;
      case "User":
        return <BiUser />
      case "Search":
        return <BiSearch />;
      default:
        return "";
    }
  };

  return (
    <Span>
      {label}
      <InputContainer>
        <IconWrapper>{InputIcon()}</IconWrapper>
        <input id={id} type={type} placeholder={placeHolder} value={value ? value : undefined} />
      </InputContainer>
    </Span>
  );
}
