import { forwardRef } from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ExperienceItem from "@/components/domain/ResumeSection/ExperienceContent/DesktopExperienceContent/ExperienceAccordionItem/ExperienceItem/ExperienceItem"
import type { ParsedExperience } from '@/model/component/ParsedSection';
import { consolidateDateRanges } from '../../util/dateRange';

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
          <div className="flex items-center justify-between w-full pr-4">
            <span>{title}</span>
            <span className="text-sm italic font-normal text-muted-foreground">
              {consolidateDateRanges(parsedExperience.positions.map(p => p.dateRange))}
            </span>
          </div>
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
