import PageContainer from "@/components/custom/PageContainer";
import ResumeSection from "@/components/domain/ResumeSection/ResumeSection";
import ProjectCard from "@/components/domain/ProjectCard/ProjectCard";
import PortfolioStack from "@/components/domain/PortfolioStack/PortfolioStack";
import FeaturedReposCarousel from "@/components/domain/FeaturedReposCarousel/FeaturedReposCarousel";
import { SPOTLIGHT_PROJECT, FEATURED_REPOS } from "@/data/projects";
import { PORTFOLIO_TAGLINE, PORTFOLIO_INTRO_STYLE } from "@/components/page/util/constant";

const PortfolioPage = () => {
  return (
    <PageContainer>
      <ResumeSection
        title="Portfolio"
        content={PORTFOLIO_TAGLINE}
        styleConfig={PORTFOLIO_INTRO_STYLE}
      />

      <div className="mb-12">
        <PortfolioStack />
      </div>

      <div className="mb-12">
        <ProjectCard project={SPOTLIGHT_PROJECT} />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground text-left desktop:text-center border-b pb-2 mb-4">
          Featured Repos
        </h2>
        <FeaturedReposCarousel projects={FEATURED_REPOS} />
      </section>
    </PageContainer>
  );
};

export default PortfolioPage;
