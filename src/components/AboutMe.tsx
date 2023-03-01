import Title from "./Title";
import { forwardRef } from "react";

interface aboutmeInt {
  ref?: React.RefObject<HTMLDivElement>;
}

const AboutMe = forwardRef<HTMLDivElement, aboutmeInt>((props, ref) => {
  return (
    <section className='section-aboutMe' ref={ref}>
      <div className='section-aboutMe-content'>
        <img
          className='section-aboutMe-img'
          src='./assets/images/profil-photo.png'
          alt="C'est moi, Cécilia"
        />
        <div className='section-aboutMe-text'>
          <Title
            text='DÉVELOPPEUSE 
                FRONT END BASÉE 
                À BORDEAUX'
            numberTitle={1}
          />
          <p className='section-aboutMe-paragraph'>
            En tant que manager pendant des années, j'ai appris à être
            méthodique, travailler en équipe et à être polyvalente. J'ai alors
            décidé de faire passer ma passion en premier en devenant Développeur
            Front-End. Après avoir suivi une formation diplômante, j'ai pu
            mettre mes compétences en pratique à travers divers projets. Je suis
            maintenant motivée à utiliser mes connaissances dans une nouvelle
            aventure.
          </p>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
