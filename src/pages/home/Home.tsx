import mainLogo from "../../assets/svg/main_logo.svg";

import { Container, MainContainer, Content, Logo, Title } from "./Home.styles";

import NavbarMenu from "../../components/navbarMenu/NavbarMenu";
import { GlobalStyle } from "../../styles/globalStyles";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <Container>
      <GlobalStyle />
      <NavbarMenu />
      <MainContainer>
        <div className="Box-logo">
          <Logo src={mainLogo} alt="Logo da Bichinhos" />
        </div>
        <div>
          <Content>
            <Title>
              Bem vindos à <br /> <strong>Bichinhos</strong> da TI.
            </Title>
            <p className="second-title">
              Comunidade dedicada ao aprendizado prático e gratuito, onde indivíduos com diversas experiências, desde líderes tecnológicos até iniciantes na área de tecnologia, estão prontos para
              oferecer auxílio.
            </p>
          </Content>
          <Footer />
        </div>
      </MainContainer>
    </Container>
  );
}
