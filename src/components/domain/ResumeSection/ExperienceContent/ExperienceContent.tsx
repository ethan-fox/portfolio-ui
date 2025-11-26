import { parseByPattern } from '@/util/resumeSectionParser';
import { parseExperienceContent } from '@/util/experienceParser';
import DesktopExperienceContent from './DesktopExperienceContent/DesktopExperienceContent';
import MobileExperienceContent from './MobileExperienceContent/MobileExperienceContent';
import type { ParsedExperienceItem } from '@/model/component/ParsedSection';

interface ExperienceContentProps {
  content: string;
}

const ExperienceContent = ({ content }: ExperienceContentProps) => {
  const experienceItems = parseByPattern(content, /(?=^##\s)/m, /^##\s+(.+)$/m, 'Untitled Experience');

  if (experienceItems.length === 0) {
    return <p className="text-muted-foreground">No experience entries found.</p>;
  }

  const parsedExperienceItems: ParsedExperienceItem[] = experienceItems.map((item) => {
    const parsed = parseExperienceContent(item.content);
    return {
      title: item.title,
      ...parsed,
    };
  });

  return (
    <>
      <div className="desktop:hidden">
        <MobileExperienceContent experienceItems={parsedExperienceItems} />
      </div>

      <div className="hidden desktop:block">
        <DesktopExperienceContent experienceItems={parsedExperienceItems} />
      </div>
    </>
  );
};

export default ExperienceContent;
