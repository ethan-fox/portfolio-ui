import { useRef } from 'react';
import { Accordion } from '@/components/ui/accordion';
import { parseByPattern } from '@/util/sectionParser';
import ExperienceAccordionItem from '@/components/domain/ResumeSection/ExperienceContent/ExperienceAccordionItem/ExperienceAccordionItem';

interface ExperienceContentProps {
  content: string;
}

const ExperienceContent = ({ content }: ExperienceContentProps) => {
  const experienceItems = parseByPattern(content, /(?=^##\s)/m, /^##\s+(.+)$/m, 'Untitled Experience');
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleAccordionChange = (value: string | string[]) => {
    const values = Array.isArray(value) ? value : [value];
    const lastOpenedValue = values[values.length - 1];

    if (lastOpenedValue) {
      const index = parseInt(lastOpenedValue.replace('item-', ''));
      const itemElement = itemRefs.current[index];

      if (itemElement) {
        setTimeout(() => {
          itemElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 300);
      }
    }
  };

  if (experienceItems.length === 0) {
    return <p className="text-muted-foreground">No experience entries found.</p>;
  }

  return (
    <Accordion type="multiple" className="w-full" onValueChange={handleAccordionChange}>
      {experienceItems.map((item, index) => (
        <ExperienceAccordionItem
          key={`experience-${index}`}
          value={`item-${index}`}
          title={item.title}
          content={item.content}
          ref={(el) => { itemRefs.current[index] = el; }}
        />
      ))}
    </Accordion>
  );
};

export default ExperienceContent;
