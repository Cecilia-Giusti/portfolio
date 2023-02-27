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
        <div>
          <Title text={realisation.name} numberTitle={2} />
          <Subtitle text={realisation.stack.join(" | ")} numberSubtitle={4} />
          <div>
            <img
              src={realisation.img}
              alt={`Maquette du projet ${realisation.name}`}
            />
          </div>
          <div>
            <p>{realisation.description}</p>
            <p>{realisation.specifications}</p>
          </div>
          <div>
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
