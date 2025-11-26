import { forwardRef } from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ExperienceItem from "@/components/domain/ResumeSection/ExperienceContent/DesktopExperienceContent/ExperienceAccordionItem/ExperienceItem/ExperienceItem"
import type { ParsedExperience } from '@/model/component/ParsedSection';

interface ExperienceAccordionItemProps {
  title: string;
  parsedExperience: ParsedExperience;
  value: string;
}

const ExperienceAccordionItem = forwardRef<HTMLDivElement, ExperienceAccordionItemProps>(
  ({ title, parsedExperience, value }, ref) => {
    return (
      <AccordionItem value={value} ref={ref}>
        <AccordionTrigger className="cursor-pointer text-lg font-semibold text-foreground hover:no-underline">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <ExperienceItem parsedExperience={parsedExperience} />
        </AccordionContent>
      </AccordionItem>
    );
  }
);

ExperienceAccordionItem.displayName = 'ExperienceAccordionItem';

export default ExperienceAccordionItem;
