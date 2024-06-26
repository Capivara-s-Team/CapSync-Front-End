import { BiSearch, BiUser } from "react-icons/bi";
import { IconWrapper, InputContainer, Span } from "./InputField.styles";
import { FaDiscord, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail, MdOutlineLock } from "react-icons/md";
import { Field } from "formik";

interface InputFieldProps {
  id?: string;
  type: string;
  name?: string;
  placeHolder?: string;
  icon?:
    | "Linkedin"
    | "Discord"
    | "Phone"
    | "Email"
    | "Password"
    | "User"
    | "Search";
}

export function InputField({
  id,
  type,
  name,
  placeHolder,
  icon,
}: InputFieldProps) {
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
        return <BiUser />;
      case "Search":
        return <BiSearch />;
      default:
        return "";
    }
  };

  return (
    <Span>
      <InputContainer>
        <IconWrapper>{InputIcon()}</IconWrapper>
        <Field id={id} name={name} type={type} placeholder={placeHolder} />
      </InputContainer>
    </Span>
  );
}
