import Title from "./Title";
import projects from "../data/database.json";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  name: string;
  img: string;
  description: string;
  stack: string[];
}

const Realisations = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className='section-realisations'>
      <Title text='RÉALISATIONS' numberTitle={2} />
      <div className='section-realisations-content'>
        {projects.projects.map((project: Project, id) => {
          return (
            <div
              className={`projet-container ${project.name
                .split(" ")[0]
                .toLowerCase()}`}
              key={id}>
              <Link
                to={`/mes-projets/${project.id}`}
                onClick={handleLinkClick}
                className='section-realisations-link'>
                <ProjectCard
                  name={project.name}
                  img={project.img}
                  description={project.description}
                  stack={project.stack}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Realisations;
