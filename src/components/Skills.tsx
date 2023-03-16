import SkillItem from "./SkillItem";
import Title from "./Title";
import skills from "../data/database.json";
import { forwardRef } from "react";

interface skillsInt {
  ref?: React.RefObject<HTMLDivElement>;
}

const Skills = forwardRef<HTMLDivElement, skillsInt>((props, ref) => {
  return (
    <section className='section-skills' id='skills' ref={ref}>
      <div className='section-skills-content'>
        <Title text='COMPÉTENCES' numberTitle={2} />
        <article className='section-skills-article'>
          <p className='section-skills-text'>
            Je suis passionnée par la création de solutions fiables et
            intuitives pour les utilisateurs. Je suis capable d'intégrer des
            maquettes en utilisant React/Vue et en respectant les principes de
            l'Atomic Design. Je suis également à l'aise pour résoudre des
            problèmes qui peuvent survenir au cours d'un projet. Je comprends
            l'importance d'avoir un code propre, robuste et maintenable, c'est
            pourquoi j'écris des tests pour garantir une couverture cohérente
            avec le projet et identifier les bugs de manière proactive.
            J'apprécie de travailler avec des outils qui m'aident à être
            organisée, mais je suis également ouverte à apprendre de nouveaux
            outils qui peuvent améliorer mon travail. En somme, je suis une
            développeuse déterminée à livrer des projets de qualité, dans les
            délais impartis, tout en garantissant un investissement optimal au
            le client.
          </p>
          <div className='section-skills-card'>
            <ul className='section-skills-list'>
              {skills.skills.map((item, id) => {
                return (
                  <li className='section-skills-item' key={id}>
                    <SkillItem skill={item} />
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
});

export default Skills;
