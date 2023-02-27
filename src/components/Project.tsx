import { useParams } from "react-router";
import projects from "../data/database.json";
import ButtonCallToAction from "./ButtonCallToAction";
import Subtitle from "./Subtitle";
import Title from "./Title";

const Project = () => {
  const realisations = projects.projects;
  const idProject = Number(useParams().id);
  const realisation = realisations.find((project) => project.id === idProject);

  if (realisation !== undefined) {
    return (
      <section className='section-project'>
        <button className='section-project-close'>
          <i className='fa-solid fa-xmark'></i>
        </button>

        <div className='section-project-titles'>
          <Title text={realisation.name} numberTitle={2} />
          <Subtitle text={realisation.stack.join(" | ")} numberSubtitle={4} />
        </div>
        <div className='section-project-content'>
          <div className='section-project-img'>
            <img
              src={realisation.maquettes}
              alt={`Maquette du projet ${realisation.name}`}
            />
          </div>
          <div className='section-project-text'>
            <p className='section-project-description'>
              {realisation.description}
            </p>
            <p className='section-project-specifications'>
              {realisation.specifications}
            </p>
          </div>
          <div className='section-project-buttons'>
            <ButtonCallToAction text='Voir le projet' url={realisation.url} />
            <ButtonCallToAction
              text='Voir les livrables'
              url={realisation.livrables}
            />
          </div>
        </div>
      </section>
    );
  } else {
    return <div>null</div>;
  }
};

export default Project;
