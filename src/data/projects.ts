import type { ProjectView } from "@/model/view/portfolio";

export const SPOTLIGHT_PROJECTS: ProjectView[] = [
  {
    id: "three-beasts",
    name: "The Three Beasts",
    description:
      "Daily sports trivia game, Wordle-style: Every day you're given three puzzles and have to guess the year behind each. Runs across baseball, football, basketball, soccer, and NCAA, so there's something for everyone.\n\nCaptures global, shareable results each day. Compete with your friends!",
    techStack: [],
    image: "/img/three-beasts.png",
    liveUrl: "https://three-beasts.com",
    githubUrl: "https://github.com/ethan-fox/three-beasts-web"
  },
  {
    id: "oban-eats",
    name: "Oban Eats",
    description:
      "Proof-of-concept for Oban-py with FastAPI, applied to the domain of a restaurant kitchen. Orders come in over REST, each meal runs as an independent async job, and workers process the queue in parallel.\n\nDeployable to minikube with Oban Web for monitoring job execution in real time.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    image: "/img/oban.png",
    githubUrl: "https://github.com/ethan-fox/oban-eats",
  },
  {
    id: "system-prompt",
    name: "system-prompt",
    description:
      "Global system prompt I use to guide LLMs across all of my personal projects. Version-controlled and symlinked into place so it stays portable across machines. A small peek into how I like to structure AI-assisted development.",
    techStack: ["AI"],
    image: "/img/git.png",
    githubUrl: "https://github.com/ethan-fox/system-prompt",
  },
  {
    id: "keda-playground",
    name: "KEDA Playground",
    description:
      "A hands-on sandbox for debugging KEDA autoscaling in Kubernetes. The mock metrics API and Hello World app lets you trigger and observe event-driven scaling behavior via minikube.",
    techStack: ["Python", "Kubernetes", "KEDA", "Helm"],
    image: "/img/k8s.png",
    githubUrl: "https://github.com/ethan-fox/keda-playground",
  },
  {
    id: "spring-di-demo",
    name: "Spring DI Demo",
    description:
      "A small Spring Boot app for playing around with Dependency Injection patterns.",
    techStack: ["Java", "Spring"],
    image: "/img/spring.png",
    githubUrl: "https://github.com/ethan-fox/spring-di-demo",
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
      "The global backend for all of my side projects. This serves my Resume content on the Home page, as well my daily sports trivia game \"The Three Beasts\" - check it out below!\n\nData is managed in Postgres with Alembic for migrations. The CI pipeline deploys to Cloud Run as a Docker image on every tagged release.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker"],
    image: "/img/python.png",
    githubUrl: "https://github.com/ethan-fox/portfolio-backend",
  },
  {
    id: "site-repo-infra",
    name: "portfolio-infra",
    description:
      "OpenTofu (Terraform) manages my entire infrastructure on GCP.\n\nCloud Run for the backend, GCS static hosting for each of my websites, and a global HTTPS load balancer with managed SSL and CDN routing. Secrets Manager for credentials, and a dedicated service account to manage my CI/CD on Github Actions.",
    techStack: ["OpenTofu", "Terraform", "Google Cloud", "GitHub Actions"],
    image: "/img/tofu.png",
    githubUrl: "https://github.com/ethan-fox/portfolio-infra",
  },
];
