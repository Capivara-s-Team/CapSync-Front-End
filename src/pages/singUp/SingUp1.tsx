import LogoBichinhos from "../../components/logoBichinhos/LogoBichinhos";

import { InputField } from "../../components/inputField/InputField";
import { ContentButtons, ContentInputs } from "./SingUp.styles";
import Button from "../../components/button/Button";
import NavbarMenu from "../../components/navbarMenu/NavbarMenu";

export default function SingUp1(){

    const inputFields = [
        {
            label: 'Nome*',
            placeholder: 'Nome',
            type: 'text',
            icon: 'User' as 'User'
        },
        {
            label: 'Sobrenome*',
            placeholder: 'Sobrenome',
            type: 'text',
            icon: 'User' as 'User'
        },
        {
            label: 'Email*',
            placeholder: 'exemplo@exemplo.com.br',
            type: 'email',
            icon: 'Email' as 'Email'
        },
        {
            label: 'Senha*',
            placeholder: 'No mínimo 6 caracteres',
            type: 'password',
            icon: 'Password' as 'Password'
        },
        {
            label: 'Confirme sua senha*',
            placeholder: 'Confirme sua senha',
            type: 'password',
            icon: 'Password' as 'Password'
        }
    ]

    return (
       <div>
        <NavbarMenu />
        <LogoBichinhos />
        <ContentInputs>
            <h3>Crie sua conta</h3>

            {inputFields.map((field) => (
                <InputField 
                    label={field.label} 
                    placeHolder={field.placeholder} 
                    type={field.type} 
                    icon={field.icon} />
            ))}
        </ContentInputs>

        <ContentButtons>
            <Button 
            text="Voltar" 
            color="rgba(68, 68, 68, 0.14)" 
            textColor="#F86B01" 
            width={15} 
            
            />
            
            <Button 
            text="Próximo" 
            color="#F86B01" 
            textColor="#312E38" 
            width={15} 
            />

        </ContentButtons>
       </div>
    )
}