import { Container, Content, LoginContainer, LoginContent, ThemeIcon } from "./Login.styles";
import { GlobalStyle } from "../../styles/globalStyles";

import night_icon from "../../assets/svg/night_icon.svg";
import mainLogo from "../../assets/svg/main_logo.svg";
import Navbar from "../../components/navbarMenu/NavbarMenu";
import Button from "../../components/button/Button";

export function Login() {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      <Content>
        <ThemeIcon>
          <img src={night_icon} alt="" />
        </ThemeIcon>
        <div>
          <img className="center_logo" src={mainLogo} alt="Center Logo" />
        </div>
        <LoginContainer>
          <LoginContent>
            <p className="main-text">Bichinhos da TI</p>
            <p className="login-text">Faça seu login</p>

            <p id="border">&nbsp;</p>
            <span>
              Email
              <input id="email-input" type="text" placeholder="exemplo@exemplo.com.br" />
            </span>
            <span>
              Senha
              <input id="password-input" type="text" placeholder="No mínimo 6 caracteres" />
            </span>

            <Button
              text="Login" 
              color="#fa6c00" 
              textColor="#2f2f2f" 
              width={17.5} />
             
            <a href="">Criar conta</a>
            <a href="">Esqueceu sua senha?</a>
          </LoginContent>
        </LoginContainer>
      </Content>
    </Container>
  );
}
