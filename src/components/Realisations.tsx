import Title from "./Title";
import projects from "../data/database.json";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const Realisations = () => {
  return (
    <section className='section-realisations'>
      <Title text='RÉALISATIONS' numberTitle={2} />
      <div className='section-realisations-content'>
        {projects.projects.map((projet, id) => {
          return (
            <Link
              to={`/mes-projets/${projet.name}`}
              key={id}
              className='section-realisations-link'>
              <ProjectCard
                name={projet.name}
                img={projet.img}
                description={projet.description}
                stack={projet.stack}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Realisations;
