import Title from "./Title";
import projects from "../data/database.json";
import ProjectCard from "./ProjectCard";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { forwardRef, useEffect, useState } from "react";
import { truncateString } from "../utils/truncateString";
gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  name: string;
  img: string;
  description: string;
  stack: string[];
}

interface realisationsInt {
  ref?: React.RefObject<HTMLDivElement>;
  setLastVisitedSection: React.Dispatch<React.SetStateAction<number>>;
}

const Realisations = forwardRef<HTMLDivElement, realisationsInt>(
  (props, ref) => {
    const navigate = useNavigate();
    const handleLinkClick = (
      event: { preventDefault: () => void },
      id: number
    ) => {
      event.preventDefault();
      props.setLastVisitedSection(window.pageYOffset);
      navigate(`/mes-projets/${id}`);
      window.scrollTo(0, 0);
    };

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
      setScreenWidth(window.screen.width);
    }, []);

    return (
      <section className='section-realisations' id='realisations'>
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
                  onClick={(event) => handleLinkClick(event, project.id)}
                  className='section-realisations-link'>
                  <ProjectCard
                    name={
                      screenWidth < 400
                        ? project.name.split(" ")[0]
                        : project.name
                    }
                    img={project.img}
                    description={
                      screenWidth < 400
                        ? truncateString(project.description, 400)
                        : project.description
                    }
                    stack={project.stack}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
);
export default Realisations;
