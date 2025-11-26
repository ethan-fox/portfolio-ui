import { PRIMARY_SKILLS } from "../constant";
import MobileExpertiseSecondaryContent from "./MobileExpertiseSecondaryContent/MobileExpertiseSecondaryContent";
import PrimarySkillCards from "../PrimarySkillCards/PrimarySkillCards";

interface MobileExpertiseContentProps {
  resumeSkills: string[];
}

const MobileExpertiseContent = ({
  resumeSkills,
}: MobileExpertiseContentProps) => {
  const primaryNames = PRIMARY_SKILLS.map((p) => p.name.toLowerCase());
  const secondarySkills = resumeSkills.filter(
    (skill) => !primaryNames.includes(skill.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <PrimarySkillCards />
      {secondarySkills.length > 0 && (
        <MobileExpertiseSecondaryContent secondarySkills={secondarySkills} />
      )}
    </div>
  );
};

export default MobileExpertiseContent;
