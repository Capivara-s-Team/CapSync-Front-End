import VolunteerCard from "../../components/volunteerCard/VolunteerCard";

interface ErrorProps {

}
export default function Error(props : ErrorProps){
    return(
        <h1><VolunteerCard
            name="Navarro"
            seniority="Júnior"
            squad="Back-end"
            status="Ativo"
        /></h1>
    )
}