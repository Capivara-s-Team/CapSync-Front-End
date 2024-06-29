// src/components/LoginForm.tsx
import { Container, Content } from "./Login.styles";
import { GlobalStyle, MessageError } from "../../styles/globalStyles";

import mainLogo from "../../assets/svg/main_logo.svg";
import Navbar from "../../components/navbarMenu/NavbarMenu";
import Button from "../../components/button/Button";
import CardForms from "../../components/cardForms/CardForms";

import { InputField } from "../../components/inputField/InputField";

import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";

import axios from "axios";
import { storageAuthTokenSave } from "../../storage/storageToken";

interface ValuesLogin {
  email: string;
  password: string;
}

interface responseBack {
  token: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido")
    .required("Você precisa preencher este campo!"),
  password: Yup.string().required("Você precisa preencher este campo!"),
});

export function Login() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ email, password }: ValuesLogin) => {
      return axios
        .post("http://localhost:8080/auth/login", { email, password })
        .then((res) => res.data);
    },
    onSuccess: (data: responseBack) => {
      storageAuthTokenSave(data.token);
      navigate("/homelogged");
    },
    onError: () => alert("Senha ou email inválidos"),
  });

  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      <Content>
        <div>
          <img className="center_logo" src={mainLogo} alt="Center Logo" />
        </div>

        <CardForms text="Faça seu login" className="teste">
          <div>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(
                values: ValuesLogin,
                { setSubmitting, validateForm }: FormikHelpers<ValuesLogin>
              ) => {
                validateForm().then((errors) => {
                  if (Object.keys(errors).length === 0) {
                    mutation.mutate(values);
                    setSubmitting(false);
                  }
                });
              }}
              validationSchema={LoginSchema}>
              {({ errors, touched }) => (
                <Form>
                  <div className="inputs">
                    <div>
                      <label htmlFor="email">Email*</label>
                      <InputField
                        id="email"
                        name="email"
                        type="email"
                        placeHolder="exemplo@exemplo.com"
                        icon="Email"
                      />
                      {errors.email && touched.email ? (
                        <MessageError>{errors.email}</MessageError>
                      ) : null}
                    </div>
                    <div>
                      <label htmlFor="password">Senha*</label>
                      <InputField
                        id="password"
                        name="password"
                        type="password"
                        placeHolder="No mínimo 6 caracteres"
                        icon="Password"
                      />
                      {errors.password && touched.password ? (
                        <MessageError>{errors.password}</MessageError>
                      ) : null}
                    </div>
                  </div>
                  <div className="btns">
                    <Button
                      type="submit"
                      text="Entrar"
                      color="#fa6c00"
                      textColor="#2f2f2f"
                      width={17.5}
                    />
                    <Link to={"/signup1"}>Criar conta</Link>
                    <Link to={"/recovery"}>Esqueceu sua senha?</Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </CardForms>
      </Content>
    </Container>
  );
}
