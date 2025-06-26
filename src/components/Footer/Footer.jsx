import "./Footer.css";
import Logo from "../../assets/LOGO-white.svg";

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
