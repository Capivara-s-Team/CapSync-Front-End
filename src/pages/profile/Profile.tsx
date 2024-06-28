import { Container, Content, ContentButtons, ContentInputs } from "./Profile.styles";

import NavbarMenuLogged from "../../components/navbarMenuLogged/NavbarMenuLogged";
import { GlobalStyle, MessageError } from "../../styles/globalStyles";
import CardForms from "../../components/cardForms/CardForms";

import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { Formik, Form, FormikHelpers } from "formik";
import { InputField } from "../../components/inputField/InputField";
import * as Yup from "yup";

interface valuesProfile {
    name: string;
    lastName: string;
    linkedIn: string;
    discord: string;
    ddd: string;
    phone: string;
  }

export default function Profile() {
    const name = 'Name';

    const profileSchemas = Yup.object().shape({
        name: Yup.string()
          .min(2, "Mínimo 2 caracteres!")
          .max(40, "Máximo 40 caracteres!")
          .required("Este campo é obrigatório!"),
        lastName: Yup.string()
          .min(2, "Mínimo 2 caracteres!")
          .max(40, "Máximo 40 caracteres!")
          .required("Este campo é obrigatório!"),
        linkedIn: Yup.string().required("Este campo é obrigatório"),
        discord: Yup.string().required("Este campo é obrigatório"),
        ddd: Yup.string().max(2, "Máx 2").required("Obrigatório"),
        phone: Yup.string().max(15, "Máx 15").required("Este campo é obrigatório")
        })
        
    return(
        <Container>
            <GlobalStyle />
            <NavbarMenuLogged />
            
            <Content>
                <CardForms>
                <div className="circle">
                    <p>{name.charAt(0)}</p>
                    {/* <p>{name.charAt(0)}</p> Pegar inicial da requisição */}
                </div>
                <Formik 
                        // Pegar valores iniciais do back end
                    initialValues={{
                    name: "",
                    lastName: "",
                    linkedIn: "",
                    discord: "",
                    ddd: "",
                    phone: ""
                
                }}
                validationSchema={profileSchemas}
                onSubmit={(
                    values: valuesProfile,
                    { setSubmitting, validateForm }: FormikHelpers<valuesProfile>
                  ) => {
                    validateForm().then((errors) => {
                       if(Object.keys(errors).length === 0) {
                        console.log(values) // Mandar json para o back end
                       }
                       setSubmitting(false);
                    }) 
                  }}
                >
                   {({errors, touched}) => (
                    <Form>
                    <ContentInputs>
                     <div className="name-lastname">
                        <div>
                         <label>Nome</label>
                         <InputField
                             name='name'
                             type="text"
                             icon="User"
                         />
                         {errors.name && touched.name ? (
                        <MessageError>{errors.name}</MessageError>
                      ) : null}
                        </div>

                        <div>
                         <label>Sobrenome</label>
                         <InputField
                             name='lastName'
                             type="text"
                             icon="User"
                         />
                         {errors.lastName && touched.lastName ? (
                        <MessageError>{errors.lastName}</MessageError>
                      ) : null}
                        </div>
                     </div>

                      <div>
                     <label>LinkedIn</label>
                     <InputField
                         name='linkedIn'
                         type="text"
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
                </ContentInputs>

                <ContentButtons>
                    <Link to={"/"}>
                        <Button
                        text="Voltar"
                        color="rgba(68, 68, 68, 0.14)"
                        textColor="#F86B01"
                        width={15}
                        />
                    </Link>

                    <Button
                        text="Salvar"
                        color="#F86B01"
                        type="submit"
                        textColor="#312E38"
                        width={15}
                    />
                    </ContentButtons>
                 </Form>
                   )}
                </Formik>
                </CardForms>
            </Content>
        </Container>
    )
}