import { PRIMARY_SKILLS } from "../constant";
import PrimarySkillCard from "./PrimarySkillCard/PrimarySkillCard";

const PrimarySkillCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 space-y-4 p-4 desktop:p-0 desktop:flex">
      {PRIMARY_SKILLS.map((skill) => (
        <PrimarySkillCard
          key={skill.name}
          name={skill.name}
          image={skill.image}
          className="aspect-square py-2 max-w-32 max-h-32 mx-auto desktop:max-w-40 desktop:max-h-40 desktop:w-40 desktop:h-40"
        />
      ))}
    </div>
  );
};

export default PrimarySkillCards;
