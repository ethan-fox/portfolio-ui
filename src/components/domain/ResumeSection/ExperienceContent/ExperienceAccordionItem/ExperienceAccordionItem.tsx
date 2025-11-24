import { forwardRef } from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ExperienceItem from '@/components/domain/ResumeSection/ExperienceContent/ExperienceAccordionItem/ExperienceItem/ExperienceItem';

interface ExperienceAccordionItemProps {
  title: string;
  content: string;
  value: string;
}

const ExperienceAccordionItem = forwardRef<HTMLDivElement, ExperienceAccordionItemProps>(
  ({ title, content, value }, ref) => {
    return (
      <AccordionItem value={value} ref={ref}>
        <AccordionTrigger className="cursor-pointer text-lg font-semibold text-foreground hover:no-underline">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <ExperienceItem content={content} />
        </AccordionContent>
      </AccordionItem>
    );
  }
);

ExperienceAccordionItem.displayName = 'ExperienceAccordionItem';

export default ExperienceAccordionItem;
