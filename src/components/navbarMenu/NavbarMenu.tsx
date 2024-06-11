import coruja from '../../assets/svg/icon_coruja.svg';
import hamburguer from '../../assets/svg/icon_hamburguer.svg';

import { Navbar } from './NavbarMenu.styles';

interface NavbarMenuProps {

}

export default function NavbarMenu(props : NavbarMenuProps){
    return (
      <Navbar>
        <img src={coruja} alt='Icon de uma coruja' />
        <img src={hamburguer} alt='Icon de hamburguer' />
      </Navbar>
    );
}