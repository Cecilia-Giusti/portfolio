interface SkillItemInt {
  skill: string;
}

const SkillItem = ({ skill }: SkillItemInt) => {
  return (
    <div>
      <div className='section-skills-circle'></div>
      <p className='section-skills-skill'>{skill}</p>
    </div>
  );
};

export default SkillItem;
