import PageContainer from "@/components/custom/PageContainer";
import ResumeSection from "@/components/domain/ResumeSection/ResumeSection";
import SectionHeader from "@/components/domain/SectionHeader/SectionHeader";
import PortfolioStack from "@/components/domain/PortfolioStack/PortfolioStack";
import { SPOTLIGHT_PROJECTS, SITE_REPOS } from "@/data/projects";
import {
  PORTFOLIO_TAGLINE,
  PORTFOLIO_INTRO_STYLE,
} from "@/components/page/util/constant";

const PortfolioPage = () => {
  return (
    <PageContainer>
      <ResumeSection
        title="Portfolio"
        content={PORTFOLIO_TAGLINE}
        styleConfig={PORTFOLIO_INTRO_STYLE}
      />

      <div className="mb-4">
        <PortfolioStack projects={SITE_REPOS} />
      </div>

      <div className="mb-12">
        <SectionHeader title="Other Cool Stuff" />
        <PortfolioStack projects={SPOTLIGHT_PROJECTS} />
      </div>
    </PageContainer>
  );
};

export default PortfolioPage;
