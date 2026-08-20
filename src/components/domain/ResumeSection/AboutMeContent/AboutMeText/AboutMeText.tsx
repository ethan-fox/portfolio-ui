import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';

interface AboutMeTextProps {
  content: string;
}

const AboutMeText = ({ content }: AboutMeTextProps) => {
  const isInternalLink = (href?: string) => href?.startsWith('/') || href?.startsWith('#');

  return (
    <Markdown
      components={{
        p: ({ children }) => (
          <p className="text-md text-center md:text-left leading-relaxed text-foreground mb-4">{children}</p>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-foreground">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="italic text-muted-foreground">{children}</em>
        ),
        h2: ({ children }) => (
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">{children}</h3>
        ),
        ul: ({ children }) => (
          <ul className="space-y-2 list-disc pl-5 marker:text-primary mb-4">{children}</ul>
        ),
        li: ({ children }) => (
          <li className="text-base text-foreground">{children}</li>
        ),
        a: ({ children, href }) => isInternalLink(href) ? (
          <Link to={href} className="text-primary font-bold underline hover:text-foreground">
            {children}
          </Link>
        ) : (
          <a
            href={href}
            className="text-primary font-bold underline hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
      }}
    >
      {content}
    </Markdown>
  );
};

export default AboutMeText;
