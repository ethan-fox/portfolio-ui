import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { parseByPattern } from '@/util/sectionParser';
import ExperienceItem from '@/components/domain/ResumeSection/ExperienceContent/ExperienceItem/ExperienceItem';

interface ExperienceContentProps {
  content: string;
}

const ExperienceContent = ({ content }: ExperienceContentProps) => {
  const experienceItems = parseByPattern(content, /(?=^##\s)/m, /^##\s+(.+)$/m, 'Untitled Experience');

  if (experienceItems.length === 0) {
    return <p className="text-muted-foreground">No experience entries found.</p>;
  }

  return (
    <Accordion type="multiple" className="w-full">
      {experienceItems.map((item, index) => (
        <AccordionItem key={`experience-${index}`} value={`item-${index}`}>
          <AccordionTrigger className="cursor-pointer text-lg font-semibold text-foreground hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent>
            <ExperienceItem content={item.content} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ExperienceContent;
