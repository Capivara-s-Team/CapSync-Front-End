import { useEffect, useState } from "react";
import navbarLogo from "../../assets/svg/navbar_logo.svg";
import nightIcon from "../../assets/svg/night_icon.svg";
import dayIcon from "../../assets/svg/day_icon.svg";

import { Navbar } from "./NavbarMenu.styles";
import { Link } from "react-router-dom";

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
        <img src={navbarLogo} alt="" />
        <span>Bichinhos da TI</span>
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
          <button onClick={toggleTheme}>{theme === "light" ? <img src={dayIcon} alt="" /> : <img src={nightIcon} alt="" />}</button>
        </div>
      </div>
    </Navbar>
  );
}
