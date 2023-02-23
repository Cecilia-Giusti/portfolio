import { NavLink } from "react-router-dom";
import ButtonCallToAction from "./ButtonCallToAction";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Compétences</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Réalisation</NavLink>
          </li>
        </ul>
      </nav>
      <ButtonCallToAction text='Contactez-moi' url='/' />
    </header>
  );
};

export default Header;
