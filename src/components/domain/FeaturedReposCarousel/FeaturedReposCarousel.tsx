import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ProjectCard from "@/components/domain/ProjectCard/ProjectCard";
import type { ProjectView } from "@/model/view/portfolio";

interface FeaturedReposCarouselProps {
  projects: ProjectView[];
}

const FeaturedReposCarousel = ({ projects }: FeaturedReposCarouselProps) => {
  return (
    <Carousel
      opts={{ loop: true, dragFree: true, align: "start" }}
      plugins={[
        AutoScroll({ speed: 1, stopOnMouseEnter: true, stopOnInteraction: false }),
      ]}
      className="px-4 md:px-12"
    >
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.id} className="basis-full md:basis-1/2">
            <ProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:inline-flex" />
      <CarouselNext className="hidden md:inline-flex" />
    </Carousel>
  );
};

export default FeaturedReposCarousel;
