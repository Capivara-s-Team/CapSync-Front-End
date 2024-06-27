import { GlobalStyle } from "../../styles/globalStyles";

import mainLogo from "../../assets/svg/main_logo.svg";

import Navbar from "../../components/navbarMenu/NavbarMenu";

import {
  Container,
  Content,
  ContentButtons,
  ContentInputs,
} from "./SignUp3.styles";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import CardForms from "../../components/cardForms/CardForms";
import { InputField } from "../../components/inputField/InputField";
import { Formik, Form } from "formik";

export default function SignUp2() {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      <Content>
        <div>
          <img className="center_logo" src={mainLogo} alt="Center Logo" />
        </div>
        <CardForms text="Crie sua conta" className="Card-content">
          <span>
            O propósito das próximas perguntas é coletar os dados de inclusão
            dos nossos voluntários para tornar a comunidade cada vez mais
            diversa. As respostas não influenciam na sua aceitação na
            comunidade.
          </span>
          <Formik initialValues={{}} onSubmit={() => {}}>
            <ContentInputs>
              <Form>
                <div>
                  <label htmlFor="">Autodeclaração étnico-racial</label>
                  <InputField id="a" type="text" name="teste" placeHolder="" />
                </div>
                <div>
                  <label htmlFor="">Gênero</label>
                  <InputField id="a" type="text" name="teste" placeHolder="" />
                </div>
              </Form>
            </ContentInputs>
          </Formik>
          <ContentButtons>
            <Link to={"/signup1"}>
              <Button
                text="Voltar"
                color="rgba(68, 68, 68, 0.14)"
                textColor="#F86B01"
                width={15}
              />
            </Link>
            <Link to={"/signup3"}>
              <Button
                text="Próximo"
                color="#F86B01"
                textColor="#312E38"
                width={15}
                icon={true}
              />
            </Link>
          </ContentButtons>
        </CardForms>
      </Content>
    </Container>
  );
}
