import type { ParsedSection } from '@/model/component/ResumeSection';

export const parseByPattern = (
  content: string,
  separator: string | RegExp,
  headingRegex: RegExp,
  defaultTitle: string = 'Untitled Section'
): ParsedSection[] => {
  if (!content || content.trim().length === 0) {
    return [];
  }

  const rawSections = content.split(separator);

  return rawSections
    .map((section) => section.trim())
    .filter((section) => section.length > 0)
    .map((section) => {
      const match = section.match(headingRegex);

      if (!match) {
        return {
          title: defaultTitle,
          content: section,
        };
      }

      const title = match[1].trim();
      const titleEndIndex = match.index! + match[0].length;
      const contentWithoutTitle = section.substring(titleEndIndex).trim();

      return {
        title,
        content: contentWithoutTitle,
      };
    });
};
