import {
  Container,
  Content,
  LoadingStyled,
  Table,
} from "./ListVolunteers.styles";
import NavbarMenuLogged from "../../components/navbarMenuLogged/NavbarMenuLogged";
import VolunteerCard from "../../components/volunteerCard/VolunteerCard";
import glass_icon from "../../assets/svg/glass_icon.svg";
import { GlobalStyle } from "../../styles/globalStyles";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../components/loading/Loading";
import { storageAuthTokenGet } from "../../storage/storageToken";
import { storageUserGet } from "../../storage/storageUser";

interface ValueProfile {
  name: string;
  squad: string;
  seniority: string;
  status: string;
  role?: string;
}

const fetchId = async (): Promise<ValueProfile[]> => {
  const user = storageUserGet();

  const { data } = await axios.get(`http://localhost:8080/user/${user}`);

  return data.content;
};

const fetchVolunteers = async (): Promise<ValueProfile[]> => {
  const token = storageAuthTokenGet();

  const { data } = await axios.get(
    "http://localhost:8080/user/volunteers/adminView",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data.content;
};

export default function ListVolunteers() {
  const { data: volunteerData, isLoading: isVolunteerLoading, isError: isVolunteerError, error: volunteerError } = useQuery<ValueProfile[], Error>({
    queryKey: ["volunteer"],
    queryFn: fetchVolunteers,
  });

  const { data: idData, isLoading: isIdLoading, isError: isIdError, error: idError } = useQuery<ValueProfile[], Error>({
    queryKey: ["userId"],
    queryFn: fetchId,
  });

  if (isVolunteerLoading || isIdLoading) {
    return (
      <LoadingStyled>
        <Loading />
      </LoadingStyled>
    );
  } else {
    return (
      <Container>
        <GlobalStyle />
        <NavbarMenuLogged />
        <Content>
          <h1>Lista de Voluntários</h1>
  
          <div className="box">
            <label>Filtro</label>
            <div className="filter-input">
              <img src={glass_icon} alt="Ícone de lupa" />
              <input type="text" />
            </div>
          </div>
  
          <Table>
            <div className="table">
              <p>Nome</p>
              <p>Squad</p>
              <p>Senioridade</p>
              <p>Status</p>
            </div>
  
            {volunteerData &&
              volunteerData.map((value: ValueProfile) => (
                <VolunteerCard
                  key={value.name}
                  name={value.name}
                  squad={value.squad}
                  seniority={value.seniority}
                  status={value.status}
                />
              ))}
          </Table>
        </Content>
      </Container>
    );
  }


}
