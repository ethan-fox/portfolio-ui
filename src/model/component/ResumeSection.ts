import type { Components } from 'react-markdown';
import type { ReactNode } from 'react';

export interface ParsedSection {
  title: string;
  content: string;
}

export interface SectionStyleConfig {
  cardClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
  markdownComponents?: Components;
  customRenderer?: (content: string) => ReactNode;
}

export interface ResumeSectionProps {
  title: string;
  content: string;
  styleConfig?: SectionStyleConfig;
}
