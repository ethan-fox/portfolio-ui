import { Fragment } from "react";
import { Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SITE_REPOS } from "@/data/projects";

const PortfolioStack = () => (
  <div className="flex flex-col gap-4 desktop:grid desktop:grid-cols-[10.8rem_1fr] desktop:items-start desktop:gap-x-6 desktop:gap-y-6">
    {SITE_REPOS.map((project, index) => (
      <Fragment key={project.id}>
        {index > 0 && <Separator className="desktop:col-span-2" />}
        <div className="flex flex-col gap-6 desktop:contents">
          <img
            src={project.image}
            alt={project.name}
            draggable={false}
            className="w-full aspect-square object-contain shrink-0 pointer-events-none select-none"
          />
          <div className="flex flex-col justify-start min-w-0 desktop:self-stretch">
            <h3 className="font-mono text-xl font-semibold text-foreground text-left">
              {project.name}
            </h3>
            <p className="text-muted-foreground mt-2 text-left">{project.description}</p>
            <div className="flex flex-wrap items-center justify-between gap-3 mt-4 desktop:mt-auto desktop:pt-4">
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
              {project.githubUrl && (
                <Button asChild variant="outline" size="sm">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github />
                    GitHub
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    ))}
  </div>
);

export default PortfolioStack;
