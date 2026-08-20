import { Fragment, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import type { ProjectView } from "@/model/view/portfolio";

interface PortfolioStackProps {
  projects: ProjectView[];
}

const PortfolioStack = ({ projects }: PortfolioStackProps) => {
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleAccordionChange = (value: string | string[]) => {
    const values = Array.isArray(value) ? value : [value];
    const lastOpenedValue = values[values.length - 1];
    const itemElement = lastOpenedValue ? itemRefs.current[lastOpenedValue] : null;

    if (itemElement) {
      setTimeout(() => {
        itemElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  };

  return (
    <>
    {/* Mobile: compact tap-to-expand rows */}
    <div className="touch:block desktop:hidden px-4">
      <Accordion type="multiple" onValueChange={handleAccordionChange}>
        {projects.map((project) => (
          <AccordionItem
            key={project.id}
            value={project.id}
            ref={(el) => { itemRefs.current[project.id] = el; }}
          >
            <AccordionTrigger className="items-center hover:no-underline">
              <div className="flex flex-row items-center gap-3 min-w-0">
                <img
                  src={project.image}
                  alt={project.name}
                  draggable={false}
                  className="w-12 h-12 rounded-lg aspect-square object-contain shrink-0 pointer-events-none select-none"
                />
                <div className="flex flex-col justify-center min-w-0">
                  <h3 className="font-mono text-sm font-semibold text-foreground text-left truncate">
                    {project.name}
                  </h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[0.65rem] uppercase tracking-wider border border-muted-foreground/40 text-muted-foreground px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm text-left mb-3 whitespace-pre-line">
                {project.description}
              </p>
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex justify-end gap-2">
                  {project.liveUrl && (
                    <Button asChild size="sm">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Visit Site
                        <ExternalLink />
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        <Github />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>

    {/* Desktop: full always-expanded 2-column layout */}
    <div className="hidden desktop:grid desktop:grid-cols-[10.8rem_1fr] desktop:items-start desktop:gap-x-6 desktop:gap-y-6 desktop:mx-[clamp(0rem,10vw,8rem)]">
      {projects.map((project, index) => (
        <Fragment key={project.id}>
          {index > 0 && <Separator className="col-span-2" />}
          <img
            src={project.image}
            alt={project.name}
            draggable={false}
            className="w-full h-auto aspect-square object-contain shrink-0 pointer-events-none select-none"
          />
          <div className="flex flex-col justify-start min-w-0 self-stretch">
            <h3 className="font-mono text-xl font-semibold text-foreground text-left">
              {project.name}
            </h3>
            <p className="text-muted-foreground mt-2 text-left whitespace-pre-line">{project.description}</p>
            <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-4">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[0.65rem] uppercase tracking-wider border border-muted-foreground/40 text-muted-foreground px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button asChild size="sm">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Visit Site
                        <ExternalLink />
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        <Github />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  </>
  );
};

export default PortfolioStack;
