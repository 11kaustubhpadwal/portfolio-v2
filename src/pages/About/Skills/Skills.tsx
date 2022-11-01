import { skills } from "./constants";
import Skill from "./Skill";

const Skills = () => {
  return (
    <>
      {skills.map((skillItem, index) => (
        <Skill
          key={`skills-list-explorer-item-${index}`}
          skillName={skillItem.skillName}
          skillDetails={skillItem.skillDetails}
          isExpanded={skillItem.isExpanded}
        />
      ))}
    </>
  );
};

export default Skills;
