import type { ProjectView } from "@/model/view/portfolio";

export const SPOTLIGHT_PROJECTS: ProjectView[] = [
  {
    id: "three-beasts",
    name: "The Three Beasts",
    description:
      "A daily sports trivia game, Wordle-style: Every day you're given three puzzles and have to guess the year behind each. Runs across baseball, football, basketball, soccer, and NCAA, so there's something for everyone.\n\nCaptures shareable, global results each day. Compete with your friends!",
    techStack: [],
    image: "/img/three-beasts.png",
    liveUrl: "https://three-beasts.com",
    githubUrl: "https://github.com/ethan-fox/three-beasts-web"
  },
];

export const FEATURED_REPOS: ProjectView[] = [
  {
    id: "featured-repo-1",
    name: "Placeholder Project One",
    description:
      "Placeholder flavor text for a featured GitHub repo. Replace with a real project and description.",
    techStack: ["Python", "PostgreSQL"],
    image: "https://placehold.co/600x400?text=Project+One",
    githubUrl: "https://github.com/ethan-fox/placeholder-repo-1",
  },
  {
    id: "featured-repo-2",
    name: "Placeholder Project Two",
    description:
      "Placeholder flavor text for another featured GitHub repo. Replace with a real project and description.",
    techStack: ["Java", "Spring"],
    image: "https://placehold.co/600x400?text=Project+Two",
    githubUrl: "https://github.com/ethan-fox/placeholder-repo-2",
  },
  {
    id: "featured-repo-3",
    name: "Placeholder Project Three",
    description:
      "Placeholder flavor text for another featured GitHub repo. Replace with a real project and description.",
    techStack: ["Go", "Redis"],
    image: "https://placehold.co/600x400?text=Project+Three",
    githubUrl: "https://github.com/ethan-fox/placeholder-repo-3",
  },
  {
    id: "featured-repo-4",
    name: "Placeholder Project Four",
    description:
      "Placeholder flavor text for another featured GitHub repo. Replace with a real project and description.",
    techStack: ["Rust", "WASM"],
    image: "https://placehold.co/600x400?text=Project+Four",
    githubUrl: "https://github.com/ethan-fox/placeholder-repo-4",
  },
  {
    id: "featured-repo-5",
    name: "Placeholder Project Five",
    description:
      "Placeholder flavor text for another featured GitHub repo. Replace with a real project and description.",
    techStack: ["Swift", "iOS"],
    image: "https://placehold.co/600x400?text=Project+Five",
    githubUrl: "https://github.com/ethan-fox/placeholder-repo-5",
  },
];

// The repos that power this portfolio website itself (frontend/backend/infra).
export const SITE_REPOS: ProjectView[] = [
  {
    id: "site-repo-frontend",
    name: "portfolio-ui",
    description:
      "The frontend you're using right now.", 
    techStack: ["React", "TypeScript", "Vite", "Tailwind", "Radix UI"],
    image: "/img/react.png",
    githubUrl: "https://github.com/ethan-fox/portfolio-ui",
  },
  {
    id: "site-repo-backend",
    name: "portfolio-backend",
    description:
      "The global backend for all of my side projects. This serves the content which powers my website's home page, as well as the REST API for my daily sports trivia game \"The Three Beasts\" - check it out below! Data is managed in Postgres with Alembic for migrations. The CI pipeline deploys to Cloud Run as a Docker image on every tagged release.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker"],
    image: "/img/python.png",
    githubUrl: "https://github.com/ethan-fox/portfolio-backend",
  },
  {
    id: "site-repo-infra",
    name: "portfolio-infra",
    description:
      "OpenTofu (Terraform) manages my entire infrastructure on GCP. Cloud Run for the backend, GCS static hosting for each of my websites, plus a global HTTPS load balancer with managed SSL and CDN routing. Secrets Manager for credentials, and a dedicated service account to manage my CI/CD on Github Actions..",
    techStack: ["OpenTofu", "Terraform", "Google Cloud", "GitHub Actions"],
    image: "https://placehold.co/600x400?text=portfolio-infra",
    githubUrl: "https://github.com/ethan-fox/portfolio-infra",
  },
];
