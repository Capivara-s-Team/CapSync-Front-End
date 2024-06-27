import { Container, Content } from "./SignUp2.styles";
import { GlobalStyle, MessageError } from "../../styles/globalStyles";

import mainLogo from "../../assets/svg/main_logo.svg";

import { InputField } from "../../components/inputField/InputField";
import { ContentButtons, ContentInputs } from "./SignUp2.styles";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbarMenu/NavbarMenu";
import CardForms from "../../components/cardForms/CardForms";

import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, FormikHelpers } from "formik";
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
  stacks: string | string[];
}

export default function SignUp2() {
  const navigate = useNavigate();

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
  const voluntariesOptions = ["Voluntário", "Mentor", "Lider"];
  const seniority = ["Junior", "Pleno", "Senior"];

  const signUpSchemas = Yup.object().shape({
    linkedIn: Yup.string().required("LinkedIn é obrigatório"),
    discord: Yup.string().required("Discord é obrigatório"),
    ddd: Yup.string().max(2, "máx 2").required("Obrigatório"),
    phone: Yup.string().max(15, "máx 15").required("Este campo é obrigatório"),
    textArea1: Yup.string().required("Este campo é obrigatório"),
    textArea2: Yup.string().required("Este campo é obrigatório"),
    firstSquad: Yup.string().required("Escolha uma opção"),
    lastSquad: Yup.string().required("Escolha uma opção"),
    voluntarieType: Yup.string().required("Escolha uma opção"),
    seniority: Yup.string().required("Escolha uma opção"),
    stacks: Yup.string().required("Escreva pelo menos uma"),
  });

  const splitString = (value: string) => {
    return value.split(",").map((stack) => stack.trim());
  };

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
            initialValues={{
              linkedIn: "",
              discord: "",
              ddd: "",
              phone: "",
              textArea1: "",
              textArea2: "",
              firstSquad: "Front-end",
              lastSquad: "Front-end",
              voluntarieType: "Voluntário",
              seniority: "Junior",
              stacks: "",
            }}
            validationSchema={signUpSchemas}
            onSubmit={(
              values: valuesSingUp2,
              { setSubmitting, validateForm }: FormikHelpers<valuesSingUp2>
            ) => {
              validateForm().then((errors) => {
                if (Object.keys(errors).length === 0) {
                  values.stacks = splitString(values.stacks as string);
                  console.log(values); // Mandar retorno para o back
                  navigate("/signup3");
                }
                setSubmitting(false);
              });
            }}>
            {({ errors, touched }) => (
              <Form>
                <ContentInputs>
                  <div className="label-input">
                    <label>LinkedIn*</label>
                    <InputField
                      type="text"
                      name="linkedIn"
                      placeHolder="LinkedIn"
                      icon="Linkedin"
                    />
                    {errors.linkedIn && touched.linkedIn ? (
                      <MessageError>{errors.linkedIn}</MessageError>
                    ) : null}
                  </div>

                  <div className="teste">
                    <div className="label-input">
                      <label>Discord*</label>
                      <InputField
                        type="text"
                        name="discord"
                        placeHolder="Discord"
                        icon="Discord"
                      />
                      {errors.discord && touched.discord ? (
                        <MessageError>{errors.discord}</MessageError>
                      ) : null}
                    </div>
                    <div className="label-input-phone">
                      <label>Telefone*</label>
                      <InputField
                        type="text"
                        name="ddd"
                        placeHolder="+55"
                        icon="Phone"
                      />
                      {errors.ddd && touched.ddd ? (
                        <MessageError>{errors.ddd}</MessageError>
                      ) : null}
                    </div>
                    <div>
                      <InputField
                        type="text"
                        name="phone"
                        placeHolder="(00) 99999-9999"
                      />
                      {errors.phone && touched.phone ? (
                        <MessageError>{errors.phone}</MessageError>
                      ) : null}
                    </div>
                  </div>

                  <div className="question1">
                    <label>
                      Por que você quer fazer parte da equipe Bichinhos da TI?*
                    </label>
                    <Field as="textarea" name="textArea1" />
                    {errors.textArea1 && touched.textArea1 ? (
                      <MessageError>{errors.textArea1}</MessageError>
                    ) : null}
                  </div>

                  <div className="question1">
                    <label>
                      O que significa o trabalho voluntário na sua vida?*
                    </label>
                    <Field as="textarea" name="textArea2" />
                    {errors.textArea2 && touched.textArea2 ? (
                      <MessageError>{errors.textArea2}</MessageError>
                    ) : null}
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
                      {errors.firstSquad && touched.firstSquad ? (
                        <MessageError>{errors.firstSquad}</MessageError>
                      ) : null}
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
                      {errors.lastSquad && touched.lastSquad ? (
                        <MessageError>{errors.lastSquad}</MessageError>
                      ) : null}
                    </div>
                  </div>

                  <div className="select-squads">
                    <div className="select3">
                      <label>Tipo de volutário?*</label>
                      <Field name="voluntarieType" as="select">
                        {voluntariesOptions.map((value, index) => (
                          <option key={index} value={value}>
                            {value}
                          </option>
                        ))}
                      </Field>
                      {errors.voluntarieType && touched.voluntarieType ? (
                        <MessageError>{errors.voluntarieType}</MessageError>
                      ) : null}
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
                      {errors.seniority && touched.seniority ? (
                        <MessageError>{errors.seniority}</MessageError>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <label>Stacks*</label>
                    <InputField
                      name="stacks"
                      placeHolder='Separe suas stacks por vírgula ","'
                      type="text"
                    />
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

                  <Button
                    type="submit"
                    text="Próximo"
                    color="#F86B01"
                    textColor="#312E38"
                    width={15}
                    icon={true}
                  />
                </ContentButtons>
              </Form>
            )}
          </Formik>
        </CardForms>
      </Content>
    </Container>
  );
}
