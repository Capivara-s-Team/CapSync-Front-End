import { Container, Content } from "./PasswordRecovery.styles";

import Navbar from "../../components/navbarMenu/NavbarMenu";

import mainLogo from "../../assets/svg/main_logo.svg";
import { InputField } from "../../components/inputField/InputField";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import CardForms from "../../components/cardForms/CardForms";

export default function PasswordRecovery() {
  return (
    <Container>
      <Navbar />
      <Content>
        <div>
          <img className="center_logo" src={mainLogo} alt="Center Logo" />
        </div>

        <CardForms text="Recuperação de senha" className="teste">
          <div>
            <InputField id="password-input" type="email" label="Email" placeHolder="exemplo@exemplo.com.br" icon="Email" />
            <div className="btns">
              <Button text="Recuperar a senha" color="#fa6c00" textColor="#2f2f2f" width={17.5} />

              <Link to={"/signup1"}>Criar conta</Link>
              <Link to={"/login"}>Voltar</Link>
            </div>
          </div>
        </CardForms>
      </Content>
    </Container>
  );
}
