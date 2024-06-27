import { Content } from "./VolunteerCard.styles";

interface VolunteerCardProps {
  name: string;
  squad: string;
  seniority: string;
  status: string;
}

export default function VolunteerCard({
  name,
  squad,
  seniority,
  status,
}: VolunteerCardProps) {
  return (
    <Content>
      <div className="circle"><p>{name.charAt(0)}</p></div>
      <p className="name">{name}</p>
      <p className="orange">{squad}</p>
      <p className="orange">{seniority}</p>
      <div className={status === "Ativo" ? "ativo" : "inativo"}>{status}</div>
    </Content>
  );
}
