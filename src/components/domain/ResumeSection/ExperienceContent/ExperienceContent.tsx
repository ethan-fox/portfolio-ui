import { parseByPattern } from '@/util/resumeSectionParser';
import { PlatformVariant } from '@/model/PlatformVariant';
import DesktopExperienceContent from './DesktopExperienceContent/DesktopExperienceContent';
import MobileExperienceContent from './MobileExperienceContent/MobileExperienceContent';

interface ExperienceContentProps {
  content: string;
  platformVariant?: PlatformVariant;
}

const ExperienceContent = ({ content }: ExperienceContentProps) => {
  const experienceItems = parseByPattern(content, /(?=^##\s)/m, /^##\s+(.+)$/m, 'Untitled Experience');

  if (experienceItems.length === 0) {
    return <p className="text-muted-foreground">No experience entries found.</p>;
  }

  return (
    <>
      <div className="md:hidden">
        <MobileExperienceContent experienceItems={experienceItems} />
      </div>

      <div className="hidden md:block">
        <DesktopExperienceContent experienceItems={experienceItems} />
      </div>
    </>
  );
};

export default ExperienceContent;
