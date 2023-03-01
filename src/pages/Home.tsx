import gsap from "gsap";
import { useEffect, useRef } from "react";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Realisations from "../components/Realisations";
import Skills from "../components/Skills";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const appRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const aboutMeProperties = { y: "-40vh" };

    if (aboutMeRef.current) {
      gsap.to(aboutMeRef.current, {
        scrollTrigger: {
          trigger: aboutMeRef.current,
          start: "top 80%",

          onEnter: () => {
            gsap.to(".section-aboutMe-img", {
              x: 0,
              autoAlpha: 1,
              duration: 1,
              delay: 0.5,
            });
            gsap.to(".section-aboutMe-text", {
              x: 0,
              autoAlpha: 1,
              duration: 1,
              delay: 0.5,
            });
          },
          onLeaveBack: () => {
            gsap.to(".section-aboutMe-img", {
              x: "-200px",
              autoAlpha: 0,
              duration: 0.5,
            });
            gsap.to(".section-aboutMe-text", {
              x: "200px",
              autoAlpha: 0,
              duration: 0.5,
            });
          },
          scrub: 1,
        },

        ease: "power2",
        ...aboutMeProperties,
      });
    }

    if (skillsRef.current) {
      gsap.to(skillsRef.current, {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",

          onEnter: () => {
            gsap.to(".section-skills-content", {
              y: "-20vh",
              autoAlpha: 1,
              duration: 1,
              delay: 0.2,
            });
          },

          onLeaveBack: () => {
            gsap.to(".section-skills-content", {
              y: "20vh",
              autoAlpha: 0,
              duration: 0.2,
            });
          },
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div className='app' ref={appRef}>
      <Header />
      <AboutMe ref={aboutMeRef} />
      <Skills ref={skillsRef} />
      <Realisations />
      <Footer />
    </div>
  );
};

export default Home;
