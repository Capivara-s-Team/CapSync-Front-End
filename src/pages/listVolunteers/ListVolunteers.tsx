import { Container, Content, Table } from "./ListVolunteers.styles";

import NavbarMenuLogged from "../../components/navbarMenuLogged/NavbarMenuLogged";
import VolunteerCard from "../../components/volunteerCard/VolunteerCard";
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

                <Table>
                    <div className="table">
                        <p>Nome</p>
                        <p>Squad</p>
                        <p>Role</p>
                        <p>Status</p>
                    </div>

                    <VolunteerCard
                        name='Name'
                        squad='Front-end'
                        seniority='Júnior'
                        status='Ativo'
                    />
                </Table>




            </Content>

        </Container>
    )
}