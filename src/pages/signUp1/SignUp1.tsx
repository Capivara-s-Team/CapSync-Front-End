import { Container, Content } from "./SignUp1.styles";
import { GlobalStyle, MessageError } from "../../styles/globalStyles";

import mainLogo from "../../assets/svg/main_logo.svg";

import { InputField } from "../../components/inputField/InputField";
import { ContentButtons, ContentInputs } from "./SignUp1.styles";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbarMenu/NavbarMenu";

import { Link, useNavigate } from "react-router-dom";
import CardForms from "../../components/cardForms/CardForms";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface valuesSingUp1 {
  id?: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  rePassword?: string;
}

export default function SignUp1() {
  const navigate = useNavigate();

  const inputFields = [
    {
      id: "name",
      label: "Nome*",
      placeholder: "Nome",
      type: "text",
      icon: "User" as const,
    },
    {
      id: "surname",
      label: "Sobrenome*",
      placeholder: "Sobrenome",
      type: "text",
      icon: "User" as const,
    },
    {
      id: "email",
      label: "Email*",
      placeholder: "exemplo@exemplo.com.br",
      type: "email",
      icon: "Email" as const,
    },
    {
      id: "password",
      label: "Senha*",
      placeholder: "No mínimo 8 caracteres",
      type: "password",
      icon: "Password" as const,
    },
    {
      id: "rePassword",
      label: "Confirme sua senha*",
      placeholder: "Confirme sua senha",
      type: "password",
      icon: "Password" as const,
    },
  ];

  const signUpSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Mínimo 2 caracteres!")
      .max(40, "Máximo 40 caracteres!")
      .required("Este campo é obrigatório!"),
    surname: Yup.string()
      .min(2, "Mínimo 2 caracteres!")
      .max(40, "Máximo 40 caracteres!")
      .required("Este campo é obrigatório!"),
    email: Yup.string()
      .email("Email inválido!")
      .required("Este campo é obrigatório!"),
    password: Yup.string()
      .min(8, "Mínimo 8 caracteres!")
      .max(20, "Máximo 20 caracteres!")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
        "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial!"
      )
      .required("Este campo é obrigatório!"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "As senhas não correspondem!")
      .required("Este campo é obrigatório!"),
  });

  const mutation = useMutation({
    mutationFn: ({ name, surname, email, password, rePassword }: valuesSingUp1) => {
      return axios
        .post("http://localhost:8080/user/register", {
          name,
          surname,
          email,
          password,
          rePassword
        })
        .then((res) => res.data);
    },
    onSuccess: () => {
      navigate("/signup2");
    }, onError: (erro) => {
      console.log(erro)
    }
  });

  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      <Content>
        <div>
          <img className="center_logo" src={mainLogo} alt="Center Logo" />
        </div>

        <CardForms text="Crie sua conta" className="teste">
          {/* Passar a class de darkMode no className */}
          <ContentInputs>
            <Formik
              initialValues={{
                name: "",
                surname: "",
                email: "",
                password: "",
                rePassword: "",
              }}
              validationSchema={signUpSchema}
              onSubmit={(
                values: valuesSingUp1,
                { setSubmitting, validateForm }: FormikHelpers<valuesSingUp1>
              ) => {
                validateForm().then((errors) => {
                  if (Object.keys(errors).length === 0) {
                    console.log(values)
                    mutation.mutate(values);
                  }
                  setSubmitting(false);
                });
              }}>
              {({ errors, touched }) => (
                <Form>
                  {inputFields.map((field) => (
                    <div key={field.id} className="form">
                      <label htmlFor={field.id}>{field.label}</label>
                      <InputField
                        id={field.id}
                        name={field.id}
                        placeHolder={field.placeholder}
                        type={field.type}
                        icon={field.icon}
                      />
                      {errors[field.id] && touched[field.id] ? (
                        <MessageError>{errors[field.id]}</MessageError>
                      ) : null}
                    </div>
                  ))}
                  <ContentButtons>
                    <Link to={"/login"}>
                      <Button
                        text="Voltar"
                        color="rgba(68, 68, 68, 0.14)"
                        textColor="#F86B01"
                        width={15}
                      />
                    </Link>

                    <Button
                      text="Próximo"
                      color="#F86B01"
                      type="submit"
                      textColor="#312E38"
                      width={15}
                      icon={true}
                    />
                  </ContentButtons>
                </Form>
              )}
            </Formik>
          </ContentInputs>
        </CardForms>
      </Content>
    </Container>
  );
}
