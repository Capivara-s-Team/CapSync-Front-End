import { Container, Content } from "./SignUp2.styles";
import { GlobalStyle } from "../../styles/globalStyles";

import mainLogo from "../../assets/svg/main_logo.svg";

import { InputField } from "../../components/inputField/InputField";
import { ContentButtons, ContentInputs } from "./SignUp2.styles";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbarMenu/NavbarMenu";
import CardForms from "../../components/cardForms/CardForms";

import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface valuesSingUp2 {
  id?: string;
  linkedIn: string;
  discord: string;
  ddd: string;
  phone: string;
  textArea1: string;
  textArea2: string;
  firstSquad: string;
  lastSquad: string;
  voluntarieType: string;
  seniority: string;
}

export default function SignUp2() {
  const squadOptions = [
    "Front-end",
    "Back end",
    "Fulls-stack",
    "Ui/Ux",
    "Dados",
    "CyberSecuriry",
    "Marketing",
    "Qa",
    "Games",
    "Mobile",
  ];
  const voluntariesOptions = ["Mentor", "Voluntário", "Lider"];
  const seniority = ["Junior", "Pleno", "Senior"];

  const signUpSchemas = Yup.object().shape({});

  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      <Content>
        <div>
          <img className="center_logo" src={mainLogo} alt="Center Logo" />
        </div>

        <CardForms text="Crie sua conta" className="teste">
          <Formik
            initialValues={{}}
            validationSchema={signUpSchemas}
            onSubmit={() => {}}>
            <Form>
              <ContentInputs>
                <InputField
                  id="a"
                  type="text"
                  name="LinkedIn*"
                  placeHolder="LinkedIn"
                  icon="Linkedin"
                />
                <div className="teste">
                  <InputField
                    id="a"
                    type="text"
                    name="Discord*"
                    placeHolder="Discord"
                    icon="Discord"
                  />

                  <InputField
                    id="a"
                    type="number"
                    name="Telefone*"
                    placeHolder="+55"
                    icon="Phone"
                  />

                  <InputField
                    id="a"
                    type="text"
                    name="a"
                    placeHolder="(00) 99999-9999"
                  />
                </div>

                <div className="question1">
                  <label htmlFor="">
                    Por que você quer fazer parte da equipe Bichinhos da TI?*
                  </label>
                  <textarea></textarea>
                </div>

                <div className="question1">
                  <label htmlFor="">
                    O que significa o trabalho voluntário na sua vida?*
                  </label>
                  <textarea></textarea>
                </div>

                <div className="select-squads">
                  <div className="select1">
                    <label>Em qual squad você gostaria de participar?*</label>
                    <Field name="firstSquad" as="select">
                      {squadOptions.map((value, index) => (
                        <option key={index} value={value}>
                          {value}
                        </option>
                      ))}
                    </Field>
                  </div>

                  <div className="select2">
                    <label>Qual squad seria sua segunda opção?*</label>
                    <Field name="lastSquad" as="select">
                      {squadOptions.map((value, index) => (
                        <option key={index} value={value}>
                          {value}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>

                <div className="second-div">
                  <div className="select3">
                    <label>Tipo de volutário?*</label>
                    <Field name="voluntariesOptions" as="select">
                      {voluntariesOptions.map((value, index) => (
                        <option key={index} value={value}>
                          {value}
                        </option>
                      ))}
                    </Field>
                  </div>

                  <div className="select4">
                    <label>Senioridade?*</label>
                    <Field name="seniority" as="select">
                      {seniority.map((value, index) => (
                        <option key={index} value={value}>
                          {value}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>
              </ContentInputs>

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
            </Form>
          </Formik>
        </CardForms>
      </Content>
    </Container>
  );
}
