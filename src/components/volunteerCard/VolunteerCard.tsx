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
      <div>Image</div>
      <p>{name}</p>
      <p>{squad}</p>
      <p>{seniority}</p>
      <p>{status}</p>
    </Content>
  );
}
