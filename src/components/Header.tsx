import { NavLink } from "react-router-dom";
import ButtonContact from "./ButtonContact";
import Subtitle from "./Subtitle";
import Title from "./Title";
import { motion } from "framer-motion";

const Header = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 1,
        ease: "easeOut",
      },
    },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -10 },
  };
  return (
    <header className='header'>
      <nav className='header-nav'>
        <motion.ul
          className='header-list'
          initial='hidden'
          animate='visible'
          variants={list}>
          <motion.li className='header-list-item' variants={item}>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "header-list-link active" : "header-list-link"
              }>
              Accueil
            </NavLink>
          </motion.li>
          <motion.li className='header-list-item' variants={item}>
            <NavLink
              to={"/skills"}
              className={({ isActive }) =>
                isActive ? "header-list-link active" : "header-list-link"
              }>
              Compétences
            </NavLink>
          </motion.li>
          <motion.li className='header-list-item' variants={item}>
            <NavLink
              to={"/realisations"}
              className={({ isActive }) =>
                isActive ? "header-list-link active" : "header-list-link"
              }>
              Réalisation
            </NavLink>
          </motion.li>
        </motion.ul>
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, ease: "easeOut" }}>
          <ButtonContact />
        </motion.span>
      </nav>
      <div className='header-title'>
        <Title text='Cécilia Giusti' numberTitle={3} />
        <Subtitle text='Développeuse Front-End' numberSubtitle={4} />
      </div>
    </header>
  );
};

export default Header;
