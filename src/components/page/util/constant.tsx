import type { SectionStyleConfig } from '@/model/component/ResumeSection';
import { baseCardStyle, markdownComponents } from '@/components/page/util/styleConfigFactory';
import ExperienceContent from '@/components/domain/ResumeSection/ExperienceContent/ExperienceContent';
import AboutMeContent from '@/components/domain/ResumeSection/AboutMeContent/AboutMeContent';

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

  'Proficiencies': baseCardStyle()
    .content('space-y-4')
    .withMarkdown(markdownComponents.compactGrid)
    .build(),

  'Experience': {
    ...baseCardStyle().build(),
    customRenderer: (content: string) => <ExperienceContent content={content} />,
  },
};

export const DEFAULT_SECTION_STYLE: SectionStyleConfig = baseCardStyle()
  .content('prose dark:prose-invert max-w-none')
  .withMarkdown(markdownComponents.prose)
  .build();
