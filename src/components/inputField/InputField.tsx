import { Span } from "./InputField.styles";

interface InputFieldProps {
  id: string;
  type: string;
  label: string;
  placeHolder: string
};

export default function InputField( {id, type, label, placeHolder} : InputFieldProps){
    return (
        <Span>
           {label}
           <input id={id} type={type} placeholder={placeHolder} />
        </Span>
    );
};