import Title from "./Title";

const AboutMe = () => {
  return (
    <section className='section-aboutMe'>
      <img
        className='section-aboutMe-img'
        src='./assets/images/profil-photo.png'
        alt="C'est moi, Cécilia"
      />
      <div className='section-aboutMe-content'>
        <Title
          text='DÉVELOPPEUR 
                FRONT END BASÉE 
                À BORDEAUX'
          numberTitle={1}
        />
        <p className='section-aboutMe-text'>
          En tant que manager pendant des années, j'ai appris à être méthodique,
          travailler en équipe et à être polyvalente. J'ai alors décidé de faire
          passer ma passion en premier en devenant Développeur Front-End. Après
          avoir suivi une formation diplômante, j'ai pu mettre mes compétences
          en pratique à travers divers projets. Je suis maintenant motivée à
          utiliser mes connaissances dans une nouvelle aventure.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
