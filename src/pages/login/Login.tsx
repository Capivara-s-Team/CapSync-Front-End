import { Container, Content, LoginContainer } from "./Login.styles";
import { GlobalStyle } from "../../styles/globalStyles";

import mainLogo from "../../assets/svg/main_logo.svg";
import Navbar from "../../components/navbarMenu/NavbarMenu";
import Button from "../../components/button/Button";

import { Link } from "react-router-dom";
import { InputField } from "../../components/inputField/InputField";

export function Login() {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      <Content>
        <div className="Box-logo">
          <img className="center_logo" src={mainLogo} alt="Center Logo" />
        </div>
        <LoginContainer>
            <p className="main-text">Bichinhos da TI</p>
            <p className="login-text">Faça seu login</p>

            <p id="border">&nbsp;</p>
            <InputField id="email-input" type="email" label="Email" placeHolder="exemplo@exemplo.com.br" icon="Email" />
            <InputField id="password-input" type="password" label="Senha" placeHolder="No mínimo 6 caracteres" icon="Password" />

            <Button text="Login" color="#fa6c00" textColor="#2f2f2f" width={100} />

            <a href="">
              <Link to={"/singup1"}>Criar conta</Link>
            </a>
            <a href="">
              <Link to={"/recovery"}>Esqueceu sua senha?</Link>
            </a>
        </LoginContainer>
      </Content>
    </Container>
  );
}
