import logoBichinhos from "../../assets/svg/small_logo.svg"
import { ContentLogo } from "./LogoBichinhos.styles";

export default function LogoBichinhos() {
    return(
        <ContentLogo>
            <img src={logoBichinhos} alt="Logo da bichinhos" />
            <h2>Bichinhos da TI</h2>
        </ContentLogo>
    );
}