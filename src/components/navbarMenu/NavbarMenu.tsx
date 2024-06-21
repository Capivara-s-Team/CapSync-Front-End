import { useEffect, useState } from "react";

import navbarLogo from "../../assets/svg/navbar_logo.svg";
import bichinhos from "../../assets/svg/bichinhos_da_ti.svg";
import nightIcon from "../../assets/svg/night_icon.svg";
import dayIcon from "../../assets/svg/day_icon.svg";

import { Link } from "react-router-dom";
import { TbMenu2 } from "react-icons/tb";
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
          <Link to={"/singup1"}>Cadastre-se</Link>
        </span>
        <div>
          <button onClick={toggleTheme}>
            {theme === "light" ? <img src={dayIcon} alt="" /> : <img src={nightIcon} alt="Icone do darkMode" />}
          </button>
        </div>
      </div>

      <div className="navbar-mobile">
      <button onClick={toggleTheme}>
        {theme === "light" ? <img src={dayIcon} alt="" /> : <img src={nightIcon} alt="Icone do darkMode" />}
        </button>
        <span><TbMenu2 /></span> 
      </div>
    </Navbar>
  );
}
