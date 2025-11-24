import Markdown from 'react-markdown';

interface ExperienceItemProps {
  content: string;
}

const ExperienceItem = ({ content }: ExperienceItemProps) => {
  return (
    <Markdown
      components={{
        h3: ({ children }) => (
          <h3 className="text-base font-medium text-foreground mt-2 mb-1">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="text-sm text-muted-foreground mb-3">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="space-y-2 list-disc pl-5 marker:text-primary">{children}</ul>
        ),
        li: ({ children }) => (
          <li className="text-sm text-foreground leading-relaxed">{children}</li>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-foreground">{children}</strong>
        ),
      }}
    >
      {content}
    </Markdown>
  );
};

export default ExperienceItem;
