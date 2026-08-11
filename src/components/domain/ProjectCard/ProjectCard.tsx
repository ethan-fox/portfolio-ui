import { Github } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StyledBadge from "@/components/custom/StyledBadge";
import type { ProjectView } from "@/model/view/portfolio";

interface ProjectCardProps {
  project: ProjectView;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="p-0 gap-0 flex flex-col sm:flex-row overflow-hidden">
      <img
        src={project.image}
        alt={project.name}
        draggable={false}
        className="w-full sm:w-72 sm:shrink-0 aspect-video object-cover pointer-events-none select-none"
      />
      <div className="flex flex-col flex-1">
        <CardHeader className="pt-6">
          <CardTitle className="text-xl text-left">{project.name}</CardTitle>
          <CardDescription className="text-base text-left">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <StyledBadge key={tech} variant="secondary">
                {tech}
              </StyledBadge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          {project.liveUrl && (
            <Button asChild size="sm">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Visit Site
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
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProjectCard;
