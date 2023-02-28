import { NavLink } from "react-router-dom";
import ButtonCallToAction from "./ButtonCallToAction";
import Subtitle from "./Subtitle";
import Title from "./Title";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <ul className='header-list'>
          <li className='header-list-item'>
            <NavLink to={"/"} className='header-list-link'>
              Accueil
            </NavLink>
          </li>
          <li className='header-list-item'>
            <NavLink to={"/skills"} className='header-list-link'>
              Compétences
            </NavLink>
          </li>
          <li className='header-list-item'>
            <NavLink to={"/"} className='header-list-link'>
              Réalisation
            </NavLink>
          </li>
        </ul>
        <ButtonCallToAction text='Contactez-moi' url='/' />
      </nav>
      <div className='header-title'>
        <Title text='Cécilia Giusti' numberTitle={3} />
        <Subtitle text='Développeuse Front-End' numberSubtitle={4} />
      </div>
    </header>
  );
};

export default Header;
