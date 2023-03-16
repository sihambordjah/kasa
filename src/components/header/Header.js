import logo from "../../assets/images/logo/logo.png";
import Nav from "../nav/Nav";

export default function Header() {
  return (
    <header className="headerWrap">
      <figure className="headerWrap__fig">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
      <Nav className="nav-header" />
    </header>
  );
}
