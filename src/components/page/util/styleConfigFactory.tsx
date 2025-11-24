import type { SectionStyleConfig } from '@/model/component/ResumeSection';

class SectionStyleBuilder {
  private config: SectionStyleConfig = {};

  card(className: string): this {
    this.config.cardClassName = className;
    return this;
  }

  header(className: string): this {
    this.config.headerClassName = className;
    return this;
  }

  title(className: string): this {
    this.config.titleClassName = className;
    return this;
  }

  content(className: string): this {
    this.config.contentClassName = className;
    return this;
  }

  withMarkdown(components: SectionStyleConfig['markdownComponents']): this {
    this.config.markdownComponents = components;
    return this;
  }

  build(): SectionStyleConfig {
    return this.config;
  }
}

export const createStyleConfig = (): SectionStyleBuilder => {
  return new SectionStyleBuilder();
};

export const baseCardStyle = () =>
  createStyleConfig()
    .card('bg-transparent border-transparent shadow-none')
    .header('border-b')
    .title('text-2xl font-semibold text-foreground');

export const markdownComponents = {
  prose: {
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-lg font-medium text-foreground mt-4 mb-2">{children}</h3>
    ),
    p: ({ children }: { children: React.ReactNode }) => (
      <p className="text-base text-foreground mb-4 leading-relaxed">{children}</p>
    ),
    ul: ({ children }: { children: React.ReactNode }) => (
      <ul className="space-y-2 list-disc pl-5 marker:text-primary">{children}</ul>
    ),
    li: ({ children }: { children: React.ReactNode }) => (
      <li className="text-sm text-foreground">{children}</li>
    ),
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic text-muted-foreground">{children}</em>
    ),
  },

  largeProse: {
    p: ({ children }: { children: React.ReactNode }) => (
      <p className="text-lg leading-relaxed text-foreground mb-4">{children}</p>
    ),
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic text-muted-foreground">{children}</em>
    ),
  },

  compactGrid: {
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-base font-medium text-foreground mt-4 mb-2">{children}</h3>
    ),
    ul: ({ children }: { children: React.ReactNode }) => (
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0">{children}</ul>
    ),
    li: ({ children }: { children: React.ReactNode }) => (
      <li className="flex items-center gap-2 text-sm text-foreground">
        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
        <span>{children}</span>
      </li>
    ),
    p: ({ children }: { children: React.ReactNode }) => (
      <p className="text-sm text-muted-foreground mb-2">{children}</p>
    ),
  },

  timeline: {
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-xl font-bold text-foreground mt-6 first:mt-0">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-lg font-semibold text-foreground mt-1">{children}</h3>
    ),
    p: ({ children }: { children: React.ReactNode }) => (
      <p className="text-sm text-muted-foreground mb-3">{children}</p>
    ),
    ul: ({ children }: { children: React.ReactNode }) => (
      <ul className="space-y-2 list-disc pl-5 marker:text-primary">{children}</ul>
    ),
    li: ({ children }: { children: React.ReactNode }) => (
      <li className="text-sm text-foreground leading-relaxed">{children}</li>
    ),
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
  },
};
