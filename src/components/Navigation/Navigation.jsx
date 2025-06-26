import { NavLink } from "react-router-dom";
import Logo from "../../assets/LOGO-orange.svg";

import "./navigation.css";

export default function Navigation() {
  return (
    <header className="kasaHeader">
      <div className="logoHeader">
        <img src={Logo} alt="Logo Casa" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
