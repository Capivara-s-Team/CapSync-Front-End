import mainLogo from "../../assets/svg/main_logo.svg";

import { Container, MainContainer, Content, Logo } from "./Home.styles";

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
        <Content>
          <h1>
            Bem vindos à <br /> <span>Bichinhos</span> da TI
          </h1>

          <p className="second-title">
            Comunidade dedicada ao aprendizado prático e gratuito, onde indivíduos com diversas experiências, desde líderes tecnológicos até iniciantes na área de tecnologia, estão prontos para
            oferecer auxílio.
          </p>
          <Footer />
        </Content>
      </MainContainer>
    </Container>
  );
}
