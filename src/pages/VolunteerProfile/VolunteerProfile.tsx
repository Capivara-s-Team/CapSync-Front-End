import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import CardForms from "../../components/cardForms/CardForms";
import NavbarMenuLogged from "../../components/navbarMenuLogged/NavbarMenuLogged";
import { GlobalStyle } from "../../styles/globalStyles";
import { Container, Content, InputName, InfoArea, DiscordArea, Stacks, ContentInputs, TextInfoArea, SquadOptions, StatusInfoWrapper, ContentButtons } from "./VolunteerProfile.styles";
import { InputField } from "../../components/inputField/InputField";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

export function VolunteerProfile() {
  const name = "Name";

  const stacks = ["Reactjs", "Typescript", "Angular", "Java", "SpringBoot"];

  const SquadInfo = [
    {
      name: "Em qual squad você gostaria de participar?",
      value: ["front-end", "back-end"],
    },
    {
      name: "Qual squad seria sua segunda opção?",
      value: ["back-end", "front-end"],
    },
    {
      name: "Tipo de voluntário",
      value: ["Mentor", "Aprendiz", "Ambos"],
    },
    {
      name: "Senioridade",
      value: ["junior", "pleno"],
    },
    {
      name: "Autodeclaração étnico-racial",
      value: [] as string[],
    },
    {
      name: "Gênero",
      value: [] as string[],
    },
    {
      name: "Você possui alguma deficiência?",
      value: ["Sim", "Não"],
    },
    {
      name: "Se sim, qual?",
      value: [] as string[],
    },
    {
      name: "Data de inscrição",
      value: [] as string[],
    },
  ];

  const StatusInfoList = [
    {
      value: "Status",
      name: ["Ativo", "Inativo", "Em espera"],
      visible: true,
    },
    {
      value: "Squad atual",
      name: ["Front-end", "Back-end"],
      visible: true,
    },
    {
      value: "Tipo de voluntário",
      name: ["Mentor", "Voluntário"],
      visible: true,
    },
    {
      value: "Status",
      name: ["Ativo", "Em Operação"],
      visible: false,
    },
  ];

  const [selectedDisability, setSelectedDisability] = useState("");

  const handleDisabilityChange = (option: React.SetStateAction<string>) => {
    setSelectedDisability(option);
  };

  return (
    <Container>
      <GlobalStyle />
      <NavbarMenuLogged />
      <Content>
        <CardForms className="Card-content">
          <div className="circle">
            <p>{name.charAt(0)}</p>
          </div>
          <ContentInputs>
            <Formik initialValues={{}} onSubmit={() => {}}>
              <Form>
                <InputName>
                  <div>
                    <label htmlFor="">Nome</label>
                    <InputField id="a" type="text" name="teste" placeHolder="Nome" icon="User" />
                  </div>
                  <div>
                    <label htmlFor="">Sobrenome</label>
                    <InputField id="a" type="text" name="teste" placeHolder="Sobrenome" icon="User" />
                  </div>
                </InputName>
                <InfoArea>
                  <label htmlFor="">Email</label>
                  <InputField id="a" type="text" name="teste" placeHolder="exemplo@exemplo.com.br" icon="Email" />
                  <label htmlFor="">Linkedin</label>
                  <InputField id="a" type="text" name="teste" placeHolder="Linkedin" icon="Linkedin" />
                </InfoArea>
                <DiscordArea>
                  <div>
                    <label htmlFor="" className="title">
                      Discord
                    </label>
                    <InputField id="a" type="text" name="teste" placeHolder="Discord" icon="Discord" />
                  </div>
                  <div className="phone">
                    <div className="tele">
                      <label htmlFor="" className="title">
                        Telefone
                      </label>
                      <InputField id="a" type="text" name="teste" placeHolder="+55" icon="Phone" />
                    </div>
                    <div>
                      <label htmlFor="" className="title">
                        &nbsp;
                      </label>
                      <InputField id="a" type="text" name="teste" placeHolder="(00) 99999-9999" />
                    </div>
                  </div>
                </DiscordArea>
                <Stacks>
                  <label htmlFor="">Stacks</label>
                  <Field name="Stacks" as="select">
                    {stacks.map((value, index) => (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    ))}
                  </Field>
                </Stacks>
                <TextInfoArea>
                  <div>
                    <label htmlFor="">Por que você quer fazer parte da equipe Bichinhos da TI?</label>
                    <textarea name="" id=""></textarea>
                  </div>
                  <div>
                    <label htmlFor="">O que significa o trabalho voluntário na sua vida?</label>
                    <textarea name="" id=""></textarea>
                  </div>
                </TextInfoArea>
                <SquadOptions>
                  {SquadInfo.map((item, index) => (
                    <div key={index}>
                      <label htmlFor="">{item.name}</label>
                      {item.name === "Você possui alguma deficiência?" ? (
                        <div className="chooseInput">
                          {item.value.map((option, idx) => (
                            <label key={idx}>
                              <Field type="checkbox" name="disability" value={option} checked={selectedDisability === option} onChange={() => handleDisabilityChange(option)} />
                              {option}
                            </label>
                          ))}
                        </div>
                      ) : (
                        <InputField id="a" type="text" name="teste" placeHolder={item.name} icon="User" />
                      )}
                    </div>
                  ))}
                </SquadOptions>
                <StatusInfoWrapper>
                  {StatusInfoList.map(({ name, value, visible }, index) => (
                    <div key={index} style={{ visibility: visible ? "visible" : "hidden" }}>
                      <label htmlFor="">{value}</label>
                      <Field name="Status" as="select">
                        {name.map((n, index) => (
                          <option key={index} value={n}>
                            {n}
                          </option>
                        ))}
                      </Field>
                    </div>
                  ))}
                </StatusInfoWrapper>
              </Form>
            </Formik>
          </ContentInputs>
          <ContentButtons>
            <Link to={"/"}>
              <Button text="Voltar" color="rgba(68, 68, 68, 0.14)" textColor="#F86B01" width={15} />
            </Link>

            <Button type="submit" text="Próximo" color="#F86B01" textColor="#312E38" width={15} icon={true} />
          </ContentButtons>
        </CardForms>
      </Content>
    </Container>
  );
}
