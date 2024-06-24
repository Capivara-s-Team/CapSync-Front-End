import { Container, Content, ThemeIcon } from "./Login.styles";
import { GlobalStyle } from "../../styles/globalStyles";

import night_icon from "../../assets/svg/night_icon.svg";
import mainLogo from "../../assets/svg/main_logo.svg";
import Navbar from "../../components/navbarMenu/NavbarMenu";
import Button from "../../components/button/Button";
import { InputField } from "../../components/inputField/InputField";

import { Link } from "react-router-dom";
import CardForms from "../../components/cardforms/CardForms";

export function Login() {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      <Content>
        <ThemeIcon>
          <img src={night_icon} alt="Icon de modo noturno" />
        </ThemeIcon>
        <div>
          <img className="center_logo" src={mainLogo} alt="Center Logo" />
        </div>

        <CardForms text="Faça seu login" className="teste">
          <div>
            <InputField
              id="email-input"
              type="text"
              label="Email"
              placeHolder="exemplo@exemplo.com.br"
              icon="Email"
            />
            <InputField
              id="password-input"
              type="text"
              label="Senha"
              placeHolder="No mínimo 6 caracteres"
              icon="Password"
            />

            <Button
              text="Login"
              color="#fa6c00"
              textColor="#2f2f2f"
              width={17.5}
            />

            <Link to={"/singup1"}>Criar conta</Link>
            <Link to={"/recovery"}>Esqueceu sua senha?</Link>
          </div>
        </CardForms>
      </Content>
    </Container>
  );
}
