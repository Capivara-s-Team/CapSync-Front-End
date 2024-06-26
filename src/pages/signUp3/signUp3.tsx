import { Container, Content, ContentButtons, ContentInputs } from "./signUp3.styles";
import { GlobalStyle } from "../../styles/globalStyles";

import mainLogo from "../../assets/svg/main_logo.svg";

import Button from "../../components/button/Button";
import Navbar from "../../components/navbarMenu/NavbarMenu";
import CardForms from "../../components/cardForms/CardForms";

import { Link } from "react-router-dom";

export default function SignUp2() {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      <Content>
        <div>
          <img className="center_logo" src={mainLogo} alt="Center Logo" />
        </div>

        <CardForms text="Crie sua conta" className="teste">
          <ContentInputs>
            <h1>SignUp3</h1>
          </ContentInputs>

          <ContentButtons>
            <Link to={"/signup2"}>
              <Button text="Voltar" color="rgba(68, 68, 68, 0.14)" textColor="#F86B01" width={15} />
            </Link>

            <Link to={"/signup3"}>
              <Button text="Próximo" color="#F86B01" textColor="#312E38" width={15} icon={true} />
            </Link>
          </ContentButtons>
        </CardForms>
      </Content>
    </Container>
  );
}
