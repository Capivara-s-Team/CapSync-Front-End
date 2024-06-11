import imageLogo from '../../assets/svg/logo_bichinhos.svg';

import { Container, Content, Logo, Title } from './Home.styles';

import Line from '../../components/line/Line';
import NavbarMenu from '../../components/navbarMenu/NavbarMenu';
import Footer from '../../components/footer/Footer';

interface HomeProps {

}

export default function Home(props : HomeProps){

    return(
        <Container>
            <NavbarMenu />
            <Logo src={imageLogo} alt="Logo da Bichinhos" />
            <Line />
            <Title> Bem vindos à <br /> Bichinhos da TI.</Title>
            <Content>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem libero mollitia enim. 
                Voluptas, cum velit. Assumenda aut, repellendus totam sunt magnam consequatur culpa incidunt 
                animi atque sit quae corrupti quia?
            </Content>
            <Footer />
        </Container>
    );
}