import type { ParsedExperience, PositionTitle } from "@/model/component/ParsedSection";



export const parseExperienceContent = (content: string): ParsedExperience => {
  const lines = content.split('\n');
  const italicizedLines: string[] = [];
  const otherLines: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('_') && trimmed.endsWith('_')) {
      italicizedLines.push(trimmed.slice(1, -1));
    } else {
      otherLines.push(line);
    }
  }

  const location = italicizedLines[0] || '';
  const positionLines = italicizedLines.slice(1);

  const positions: PositionTitle[] = positionLines.map((line) => {
    const parts = line.split('|').map(part => part.trim());
    return {
      title: parts[0] || '',
      dateRange: parts[1] || ''
    };
  });

  const remainingContent = otherLines.join('\n').trim();

  return {
    location,
    positions,
    remainingContent
  };
};
