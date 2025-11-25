import { useRef } from 'react';
import { Accordion } from '@/components/ui/accordion';
import ExperienceAccordionItem from './ExperienceAccordionItem/ExperienceAccordionItem';

interface ExperienceItem {
  title: string;
  content: string;
}

interface DesktopExperienceContentProps {
  experienceItems: ExperienceItem[];
}

const DesktopExperienceContent = ({ experienceItems }: DesktopExperienceContentProps) => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleAccordionChange = (value: string | string[]) => {
    const values = Array.isArray(value) ? value : [value];
    const lastOpenedValue = values[values.length - 1];

    if (lastOpenedValue) {
      const index = parseInt(lastOpenedValue.replace('item-', ''));
      const itemElement = itemRefs.current[index];

      if (itemElement) {
        setTimeout(() => {
          itemElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }, 300);
      }
    }
  };

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

export default DesktopExperienceContent;
