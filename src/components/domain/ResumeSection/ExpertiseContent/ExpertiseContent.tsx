import MobileExpertiseContent from "./MobileExpertiseContent/MobileExpertiseContent";
import DesktopExpertiseContent from "./DesktopExpertiseContent/DesktopExpertiseContent";

interface ExpertiseContentProps {
  content: string;
}

const ExpertiseContent = ({ content }: ExpertiseContentProps) => {
  const resumeSkills = content.split(",").map(skill => skill.trim()).sort();
  return (
    <>
      <div className="touch:block desktop:hidden">
        <MobileExpertiseContent resumeSkills={resumeSkills} />
      </div>

      <div className="hidden desktop:block">
        <DesktopExpertiseContent resumeSkills={resumeSkills} />
      </div>
    </>
  );
};

export default ExpertiseContent;
