import type { SectionStyleConfig } from '@/model/component/ResumeSection';
import { baseCardStyle, markdownComponents } from '@/components/page/util/styleConfigFactory';
import ExperienceContent from '@/components/domain/ResumeSection/ExperienceContent/ExperienceContent';
import AboutMeContent from '@/components/domain/ResumeSection/AboutMeContent/AboutMeContent';
import ExpertiseContent from '@/components/domain/ResumeSection/ExpertiseContent/ExpertiseContent';

export const SECTION_STYLES: Record<string, SectionStyleConfig> = {
  'About Me': {
    ...baseCardStyle().build(),
    customRenderer: (content: string) => (
      // TODO get profile pic
      <AboutMeContent
        content={content}
        profilePhotoSrc="/img/x.png"
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
