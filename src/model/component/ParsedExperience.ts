interface PositionTitle {
  title: string;
  dateRange: string;
}

export interface ParsedExperience {
  location: string;
  positions: PositionTitle[];
  remainingContent: string;
}