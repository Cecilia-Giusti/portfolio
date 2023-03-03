import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import ButtonContact from "./ButtonContact";
import Subtitle from "./Subtitle";
import Title from "./Title";
import { useEffect, useState } from "react";

interface headerInt {
  skillsDom: HTMLElement | null;
  realisationsDom: HTMLElement | null;
}

const Header = ({ skillsDom, realisationsDom }: headerInt) => {
  const headerRef = useRef<HTMLInputElement>(null);
  const buttonContactMeRef = useRef<HTMLInputElement>(null);
  const listRef = useRef([]);
  const title = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setScreenWidth(window.screen.width);
  }, []);

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

  const scrollToSkills = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setNavOpen(false);
    event.preventDefault();
    if (skillsDom) {
      const offset = -250;
      window.scrollTo({
        top: skillsDom.offsetTop + offset,
        behavior: "smooth",
      });

      setNavOpen(false);
    }
  };

  const scrollToRealisations = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setNavOpen(false);
    event.preventDefault();
    if (realisationsDom !== null) {
      window.scrollTo({
        top: realisationsDom.offsetTop,
        behavior: "smooth",
      });

      setNavOpen(false);
    }
  };

  return (
    <header className='header' ref={headerRef}>
      {screenWidth < 500 ? (
        navOpen ? (
          <div className='header-small'>
            <button
              aria-label='Close the nav'
              className='header-small-button-close'
              onClick={() => setNavOpen(false)}>
              {" "}
              <i className='fa-solid fa-xmark'></i>
            </button>

            <nav className=' header-small-nav'>
              <ul className='header-small-list'>
                <li className='header-small-list-item'>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "header-small-list-link active"
                        : "header-small-list-link"
                    }>
                    Accueil
                  </NavLink>
                </li>
                <li className='header-small-list-item'>
                  <a
                    onClick={scrollToSkills}
                    href='#skills'
                    className='header-small-list-link'>
                    Compétences
                  </a>
                </li>
                <li className='header-small-list-item'>
                  <a
                    href='#realisations'
                    onClick={scrollToRealisations}
                    className='header-small-list-link'>
                    Réalisation
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          <button
            className='header-button-nav'
            aria-label='Open the nav'
            onClick={() => setNavOpen(true)}>
            <i className='fa-solid fa-bars'></i>
          </button>
        )
      ) : (
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
              <a
                onClick={scrollToSkills}
                href='#skills'
                className='header-list-link'>
                Compétences
              </a>
            </li>
            <li className='header-list-item'>
              <a
                href='#realisations'
                onClick={scrollToRealisations}
                className='header-list-link'>
                Réalisations
              </a>
            </li>
          </ul>
          <span className='button-contact-nav' ref={buttonContactMeRef}>
            <ButtonContact />
          </span>
        </nav>
      )}

      <div className='header-title' ref={title}>
        <Title text='Cécilia Giusti' numberTitle={3} />
        <Subtitle text='Développeuse Front-End' numberSubtitle={4} />
      </div>
    </header>
  );
};

export default Header;
