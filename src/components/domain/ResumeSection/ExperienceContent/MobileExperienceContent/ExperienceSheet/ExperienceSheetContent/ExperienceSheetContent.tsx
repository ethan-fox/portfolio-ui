import Markdown from "react-markdown";
import type { ParsedExperience } from "@/model/component/ParsedSection";
import ExperiencePositionInfo from "./ExperiencePositionInfo/ExperiencePositionInfo";

interface ExperienceSheetContentProps {
  parsedExperience: ParsedExperience;
}

const ExperienceSheetContent = ({
  parsedExperience,
}: ExperienceSheetContentProps) => {
  return (
    <div>
      <ExperiencePositionInfo positions={parsedExperience.positions} />

      {parsedExperience.remainingContent && (
        <div>
          <Markdown
            components={{
            h3: ({ children }) => (
              <h3 className="text-base font-medium text-foreground mt-2 mb-1">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-sm text-muted-foreground mb-3">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="space-y-2 list-disc px-5 marker:text-primary pb-5">
                {children}
              </ul>
            ),
            li: ({ children }) => (
              <li className="text-sm text-foreground leading-relaxed">
                {children}
              </li>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-foreground">
                {children}
              </strong>
            ),
            a: ({ children, href }) => (
              <a
                href={href}
                className="text-primary font-bold underline hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
          }}
        >
          {parsedExperience.remainingContent}
          </Markdown>
        </div>
      )}
    </div>
  );
};

export default ExperienceSheetContent;
