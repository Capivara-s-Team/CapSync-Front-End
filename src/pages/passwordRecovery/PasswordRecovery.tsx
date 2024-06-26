import { Container, Content } from "./PasswordRecovery.styles";
import { MdOutlineMail } from "react-icons/md";

import Navbar from "../../components/navbarMenu/NavbarMenu";

import mainLogo from "../../assets/svg/main_logo.svg";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import CardForms from "../../components/cardForms/CardForms";
import {
  IconWrapper,
  InputContainer,
} from "../../components/inputField/InputField.styles";

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
            <div className="input">
              <label>Email</label>
              <InputContainer>
                <IconWrapper>
                  <MdOutlineMail />
                </IconWrapper>
                <input placeholder="exemplo@exemplo.com" type="text" />
              </InputContainer>
            </div>
            <div className="btns">
              <Button
                text="Recuperar a senha"
                color="#fa6c00"
                textColor="#2f2f2f"
                width={17.5}
              />

              <Link to={"/signup1"}>Criar conta</Link>
              <Link to={"/login"}>Voltar</Link>
            </div>
          </div>
        </CardForms>
      </Content>
    </Container>
  );
}
