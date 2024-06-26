import { Container, Content } from "./SignUp1.styles";
import { GlobalStyle } from "../../styles/globalStyles";

import mainLogo from "../../assets/svg/main_logo.svg";

import { InputField } from "../../components/inputField/InputField";
import { ContentButtons, ContentInputs } from "./SignUp1.styles";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbarMenu/NavbarMenu";

import { Link } from "react-router-dom";
import CardForms from "../../components/cardForms/CardForms";

export default function SignUp1() {
  const inputFields = [
    {
      label: "Nome*",
      placeholder: "Nome",
      type: "text",
      icon: "User" as const,
    },
    {
      label: "Sobrenome*",
      placeholder: "Sobrenome",
      type: "text",
      icon: "User" as const,
    },
    {
      label: "Email*",
      placeholder: "exemplo@exemplo.com.br",
      type: "email",
      icon: "Email" as const,
    },
    {
      label: "Senha*",
      placeholder: "No mínimo 6 caracteres",
      type: "password",
      icon: "Password" as const,
    },
    {
      label: "Confirme sua senha*",
      placeholder: "Confirme sua senha",
      type: "password",
      icon: "Password" as const,
    },
  ];

  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      <Content>
        <div>
          <img className="center_logo" src={mainLogo} alt="Center Logo" />
        </div>

        <CardForms text="Crie sua conta" className="teste">
          {" "}
          {/* Passar a class de darkMode no className */}
          <ContentInputs>
            {inputFields.map((field) => (
              <InputField key={field.label} label={field.label} placeHolder={field.placeholder} type={field.type} icon={field.icon} />
            ))}
          </ContentInputs>
          <ContentButtons>
            <Link to={"/signup1"}>
              <Button text="Voltar" color="rgba(68, 68, 68, 0.14)" textColor="#F86B01" width={15} />
            </Link>

            <Link to={"/signup2"}>
              <Button text="Próximo" color="#F86B01" textColor="#312E38" width={15} icon={true} />
            </Link>
          </ContentButtons>
        </CardForms>
      </Content>
    </Container>
  );
}
