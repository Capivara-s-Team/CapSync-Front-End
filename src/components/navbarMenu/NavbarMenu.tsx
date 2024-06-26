import { useEffect, useState } from "react";

import navbarLogo from "../../assets/svg/navbar_logo.svg";
import bichinhos from "../../assets/svg/bichinhos_da_ti.svg";
import nightIcon from "../../assets/svg/night_icon.svg";
import dayIcon from "../../assets/svg/day_icon.svg";

import { Link } from "react-router-dom";
import { Navbar } from "./NavbarMenu.styles";

export default function NavbarMenu() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Navbar>
      <div className="Box-logo">
        <img src={navbarLogo} alt="Icon logo Bichinhos" />
        <img src={bichinhos} alt="Escrita do logo bichinhos" />
      </div>
      <div className="navbar-icons">
        <span>
          <Link to={"/"}>Home</Link>
        </span>
        <span>
          <Link to={"/login"}>Login</Link>
        </span>
        <span>
          <Link to={"/signup1"}>Cadastre-se</Link>
        </span>
        <div>
          <button onClick={toggleTheme}>{theme === "light" ? <img src={dayIcon} alt="Icone de Lith mode" /> : <img src={nightIcon} alt="Icone do darkMode" />}</button>
        </div>
      </div>
    </Navbar>
  );
}
