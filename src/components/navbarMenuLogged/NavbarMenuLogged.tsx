import { useEffect, useState } from "react";

import navbarLogo from "../../assets/svg/navbar_logo.svg";
import bichinhos from "../../assets/svg/bichinhos_da_ti.svg";
import nightIcon from "../../assets/svg/night_icon.svg";
import dayIcon from "../../assets/svg/day_icon.svg";
import logout_icon from "../../assets/svg/logout_icon.svg";
import profile_img from "../../assets/svg/profile_img.svg";

import { Link } from "react-router-dom";
import { NavbarLogged } from "./NavbarMenuLogged.styles";
import { storageAuthTokenRemove } from "../../storage/storageToken";

export default function NavbarMenuLogged() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const logout = () => {
    storageAuthTokenRemove();
  }

  return (
    <NavbarLogged>
      <div className="Box-logo">
        <img src={navbarLogo} alt="Icon logo Bichinhos" />
        <img src={bichinhos} alt="Escrita do logo bichinhos" />
      </div>
      <div className="navbar-icons">
        <span>
          <Link to={"/homeLogged"}>Home</Link>
        </span>
        <span>
          <Link to={"/list"}>Voluntários</Link>
        </span>
        <span>
          <Link to={"/profile"}> <img className="profile" src={profile_img} alt="Icone de logout" /></Link>
        </span>
        <span>
          <Link onClick={logout} to={"/"}> <img src={logout_icon} alt="Icone de logout" /></Link>
        </span>
        <div>
          <button onClick={toggleTheme}>{theme === "light" ? <img src={dayIcon} alt="Icone de Lith mode" /> : <img src={nightIcon} alt="Icone do darkMode" />}</button>
        </div>
      </div>
    </NavbarLogged>
  );
}
