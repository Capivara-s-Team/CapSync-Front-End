import { Container, Content, RecoverContainer, RecoverContent } from "./PasswordRecovery.styles";

import Navbar from "../../components/navbarMenu/NavbarMenu";

import mainLogo from "../../assets/svg/main_logo.svg";
import { InputField } from "../../components/inputField/InputField";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

export default function PasswordRecovery() {
  return (
    <Container>
      <Navbar />
      <Content>
        <div>
          <img className="center_logo" src={mainLogo} alt="Center Logo" />
        </div>
        <RecoverContainer>
          <RecoverContent>
            <div className="main-text">Bichinhos da TI</div>
            <div className="login-text">Recuperação de senha</div>
            <div id="border"></div>
            <span>
              <InputField id="password-input" type="email" label="Senha" placeHolder="exemplo@exemplo.com.br" icon="Email" />
              <Button text="Login" color="#fa6c00" textColor="#2f2f2f" width={17.5} />
            </span>
            <a href="">
              <Link to={"/singup1"}>Criar conta</Link>
            </a>
            <a href="">
              <Link to={"/login"}>Voltar</Link>
            </a>
          </RecoverContent>
        </RecoverContainer>
      </Content>
    </Container>
  );
}
