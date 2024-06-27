import { Container, Content } from "./ListVolunteers.styles";

import NavbarMenuLogged from "../../components/navbarMenuLogged/NavbarMenuLogged";
//import VolunteerCard from "../../components/volunteerCard/VolunteerCard";
import glass_icon from "../../assets/svg/glass_icon.svg";
import { GlobalStyle } from "../../styles/globalStyles";


export default function ListVolunteers() {
    return (
        <Container>
            <GlobalStyle />
            <NavbarMenuLogged />
            <Content>
                <h1>Lista de Voluntários</h1>

                <label htmlFor="">Filtro</label>
                <div className="filter-input">
                    <img src={glass_icon} alt="" />
                    <input type="text" />
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Squad</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                </table>

            </Content>

        </Container>
    )
}