import { Container, Content } from "./SignUp2.styles";
import { GlobalStyle } from "../../styles/globalStyles";

import mainLogo from "../../assets/svg/main_logo.svg";

import { InputField } from "../../components/inputField/InputField";
import { ContentButtons, ContentInputs } from "./SignUp2.styles";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbarMenu/NavbarMenu";
import CardForms from "../../components/cardForms/CardForms";

import { Link } from "react-router-dom";

export default function SignUp2() {
  const squadOptions = ["Front-end", "Back end", "Fulls-stack", "Ui/Ux", "Dados", "CyberSecuriry", "Marketing", "Qa", "Games", "Mobile"];
  const voluntariesOptions = ["Mentor", "Voluntário", "Lider"];
  const seniority = ["Junior", "Pleno", "Senior"];

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
            <InputField type="text" label="LinkedIn*" placeHolder="LinkedIn" icon="Linkedin" />
            <div className="teste">
              <InputField type="text" label="Discord*" placeHolder="Discord" icon="Discord" />

              <InputField type="number" label="Telefone*" placeHolder="+55" icon="Phone" />

              <InputField type="text" label="" placeHolder="(00) 99999-9999" />
            </div>

            <div className="question1">
              <label htmlFor="">Por que você quer fazer parte da equipe Bichinhos da TI?*</label>
              <textarea></textarea>
            </div>

            <div className="question1">
              <label htmlFor="">O que significa o trabalho voluntário na sua vida?*</label>
              <textarea></textarea>
            </div>

            <div className="select-squads">
              <div className="select1">
                <label htmlFor="">Em qual squad você gostaria de participar?*</label>
                <select name="" id="">
                  {squadOptions.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div className="select2">
                <label htmlFor="">Qual squad seria sua segunda opção?*</label>
                <select name="" id="">
                  {squadOptions.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="second-div">
              <div className="select3">
                <label htmlFor="">Tipo de volutário?*</label>
                <select name="" id="">
                  {voluntariesOptions.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div className="select4">
                <label htmlFor="">Senioridade?*</label>
                <select name="" id="">
                  {seniority.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </ContentInputs>

          <ContentButtons>
            <Link to={"/singup1"}>
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
