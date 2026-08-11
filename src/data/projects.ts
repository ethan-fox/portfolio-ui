import type { ProjectView } from "@/model/view/portfolio";

export const SPOTLIGHT_PROJECT: ProjectView = {
  id: "three-beasts",
  name: "The Three Beasts",
  description:
    "A daily sports trivia game, Wordle-style: you're given a hint and have to guess the year behind it. Runs across baseball, football, basketball, soccer, and NCAA variants, each with its own color-coded identity, tracks your daily streak, and turns your results into shareable, chart-backed stats.",
  techStack: ["React", "TypeScript", "Vite", "Tailwind", "Motion", "Victory"],
  image: "https://placehold.co/1200x400?text=The+Three+Beasts",
  liveUrl: "https://three-beasts.com",
};

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
      "The frontend you're looking at right now. This is a React/Vite site styled with Tailwind and ShadCN/Radix components. Build pipeline does XYZ",
    techStack: ["React", "TypeScript", "Vite", "Tailwind", "Radix UI"],
    image: "/img/react.png",
    githubUrl: "https://github.com/ethan-fox/portfolio-ui",
  },
  {
    id: "site-repo-backend",
    name: "portfolio-backend",
    description:
      "My global backend for all of my side projects. This serves the content which powers my website's home page, as well as a REST API for my daily sports trivia game \"The Three Beasts\" - check it out below! Data is managed in Postgres with Alembic for managing migrations. My CI pipeline deploys to Cloud Run as a Docker image on every tagged release.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker"],
    image: "/img/python.png",
    githubUrl: "https://github.com/ethan-fox/portfolio-backend",
  },
  {
    id: "site-repo-infra",
    name: "portfolio-infra",
    description:
      "OpenTofu (Terraform) manages my entire infrastructure on GCP. Cloud Run for the backend, GCS static hosting for this site and `three-beasts.com`, a global HTTPS load balancer with managed SSL and CDN routing both domains, Secret Manager for credentials, and a dedicated CI service account.",
    techStack: ["OpenTofu", "Terraform", "Google Cloud", "GitHub Actions"],
    image: "https://placehold.co/600x400?text=portfolio-infra",
    githubUrl: "https://github.com/ethan-fox/portfolio-infra",
  },
];
