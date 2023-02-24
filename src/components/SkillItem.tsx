interface SkillItemInt {
  skill: string;
}

const SkillItem = ({ skill }: SkillItemInt) => {
  return (
    <div>
      <span className='section-skills-circle'></span>
      <p className='section-skills-skill'>{skill}</p>
    </div>
  );
};

export default SkillItem;
