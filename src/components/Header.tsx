import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import ButtonContact from "./ButtonContact";
import Subtitle from "./Subtitle";
import Title from "./Title";

const Header = () => {
  const headerRef = useRef<HTMLInputElement>(null);
  const buttonContactMeRef = useRef<HTMLInputElement>(null);
  const listRef = useRef([]);
  const title = useRef(null);

  useLayoutEffect(() => {
    if (headerRef.current !== null) {
      listRef.current = Array.from(
        headerRef.current.querySelectorAll(".header-list-item")
      );

      const tl = gsap.timeline({ defaults: { ease: "power3" } });

      tl.to(title.current, { autoAlpha: 1, duration: 1 })
        .to(listRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
        })
        .to(buttonContactMeRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "bounce",
        });
    }
  }, []);

  return (
    <header className='header' ref={headerRef}>
      <nav className='header-nav'>
        <ul className='header-list'>
          <li className='header-list-item'>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "header-list-link active" : "header-list-link"
              }>
              Accueil
            </NavLink>
          </li>
          <li className='header-list-item'>
            <NavLink
              to={"/skills"}
              className={({ isActive }) =>
                isActive ? "header-list-link active" : "header-list-link"
              }>
              Compétences
            </NavLink>
          </li>
          <li className='header-list-item'>
            <NavLink
              to={"/realisations"}
              className={({ isActive }) =>
                isActive ? "header-list-link active" : "header-list-link"
              }>
              Réalisation
            </NavLink>
          </li>
        </ul>
        <span className='button-contact-nav' ref={buttonContactMeRef}>
          <ButtonContact />
        </span>
      </nav>
      <div className='header-title' ref={title}>
        <Title text='Cécilia Giusti' numberTitle={3} />
        <Subtitle text='Développeuse Front-End' numberSubtitle={4} />
      </div>
    </header>
  );
};

export default Header;
