import type { SectionStyleConfig } from '@/model/component/ResumeSection';
import { baseCardStyle, markdownComponents } from '@/components/page/util/styleConfigFactory';
import ExperienceContent from '@/components/domain/ResumeSection/ExperienceContent/ExperienceContent';
import QuickHits from '@/components/domain/ResumeSection/AboutMeContent/QuickHits/QuickHits';
import ExpertiseContent from '@/components/domain/ResumeSection/ExpertiseContent/ExpertiseContent';

export const RESUME_PDF_PATH = '/Ethan_Fox_Resume.pdf';

export const ABOUT_ME_TAGLINE = "My name is Ethan and I've been a hobby programmer since I was 15 years old. I love building things with code, and I'm glad you could stop by!";

export const QUICK_HITS_TITLE = 'Quick Hits';

export const QUICK_HITS_CONTENT = [
  `For a downloadable copy of my resume, [click here](${RESUME_PDF_PATH}).`,
  'For inquiries (or just to say hi!) feel free to drop me a note at [ethan@ethan-builds.com](mailto:ethan@ethan-builds.com).',
  'Check out my [Portfolio](/portfolio) for a showcase of my work.',
].join('\n');

export const SECTION_STYLES: Record<string, SectionStyleConfig> = {
  [QUICK_HITS_TITLE]: {
    ...baseCardStyle().build(),
    customRenderer: (content: string) => <QuickHits content={content} />,
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

export const PORTFOLIO_TAGLINE = `I built & designed this web ecosystem entirely myself, with AI as a partner for code generation. The full stack is composed of a React frontend and FastAPI backend, deployed in Google Cloud and managed by OpenTofu. My source code can be found on Github, partitioned in the following repos:`;

export const PORTFOLIO_PROSE_CLASSNAME =
  'text-md leading-relaxed text-foreground mb-4 text-left desktop:text-center desktop:mx-[clamp(0rem,10vw,12rem)]';

export const PORTFOLIO_INTRO_STYLE: SectionStyleConfig = baseCardStyle()
  .withMarkdown({
    p: ({ children }: { children?: React.ReactNode }) => (
      <p className={PORTFOLIO_PROSE_CLASSNAME}>{children}</p>
    ),
  })
  .build();
