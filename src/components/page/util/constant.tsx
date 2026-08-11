import type { SectionStyleConfig } from '@/model/component/ResumeSection';
import { baseCardStyle, markdownComponents } from '@/components/page/util/styleConfigFactory';
import ExperienceContent from '@/components/domain/ResumeSection/ExperienceContent/ExperienceContent';
import AboutMeContent from '@/components/domain/ResumeSection/AboutMeContent/AboutMeContent';
import ExpertiseContent from '@/components/domain/ResumeSection/ExpertiseContent/ExpertiseContent';

export const SECTION_STYLES: Record<string, SectionStyleConfig> = {
  'About Me': {
    ...baseCardStyle().build(),
    customRenderer: (content: string) => (
      <AboutMeContent
        content={content}
        profilePhotoSrc="/profile.jpg"
        profilePhotoAlt="Profile photo"
        profilePhotoFallback="EF"
      />
    ),
  },

  'Expertise': {
    ...baseCardStyle().build(),
    customRenderer: (content: string) => <ExpertiseContent content={content} />,
  },

  'Work Experience': {
    ...baseCardStyle().build(),
    customRenderer: (content: string) => <ExperienceContent content={content} />,
  },
};

export const DEFAULT_SECTION_STYLE: SectionStyleConfig = baseCardStyle()
  .content('prose dark:prose-invert max-w-none')
  .withMarkdown(markdownComponents.prose)
  .build();

export const PORTFOLIO_TAGLINE = `I built & designed this website entirely myself. The full stack is composed of a React frontend and FastAPI backend, deployed in Google Cloud and managed by OpenTofu. My source code can be found on Github in the following repos:`;

export const PORTFOLIO_INTRO_STYLE: SectionStyleConfig = baseCardStyle()
  .withMarkdown({
    p: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-md leading-relaxed text-foreground mb-4 text-left desktop:text-center">
        {children}
      </p>
    ),
  })
  .build();
