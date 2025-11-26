import { PRIMARY_SKILLS } from "../constant";
import PrimarySkillCard from "./PrimarySkillCard/PrimarySkillCard";

const PrimarySkillCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 place-items-center p-4 desktop:flex desktop:p-0">
      {PRIMARY_SKILLS.map((skill) => (
        <PrimarySkillCard
          key={skill.name}
          name={skill.name}
          image={skill.image}
          className="w-32 h-32"
        />
      ))}
    </div>
  );
};

export default PrimarySkillCards;
