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
          className="w-[clamp(8rem,15vw,10rem)] h-[clamp(8rem,15vw,10rem)]"
        />
      ))}
    </div>
  );
};

export default PrimarySkillCards;
