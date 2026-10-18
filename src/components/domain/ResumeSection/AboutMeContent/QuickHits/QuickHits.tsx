import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import type { Components } from 'react-markdown';

interface QuickHitsProps {
  content: string;
}

const LINK_CLASS_NAME = 'text-primary font-bold underline hover:text-foreground';

const isFileLink = (href: string) => /^\/[^?#]*\.[a-z0-9]+$/i.test(href);
const isInternalLink = (href: string) => !isFileLink(href) && href.startsWith('/');

const hitComponents: Components = {
  p: ({ children }) => <>{children}</>,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-muted-foreground">{children}</em>,
  a: ({ children, href = '' }) => {
    if (isInternalLink(href)) {
      return (
        <Link to={href} className={LINK_CLASS_NAME}>
          {children}
        </Link>
      );
    }

    if (isFileLink(href)) {
      return (
        <a href={href} download className={LINK_CLASS_NAME}>
          {children}
        </a>
      );
    }

    return (
      <a href={href} className={LINK_CLASS_NAME} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
};

const QuickHits = ({ content }: QuickHitsProps) => {
  const hits = content.split('\n').filter((hit) => hit.trim().length > 0);

  return (
    <ul className="space-y-2 list-disc pl-5 marker:text-primary">
      {hits.map((hit) => (
        <li key={hit} className="text-base text-foreground">
          <Markdown components={hitComponents}>{hit}</Markdown>
        </li>
      ))}
    </ul>
  );
};

export default QuickHits;
