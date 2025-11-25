import type { ParsedExperience } from "@/model/component/ParsedSection";
import StyledBadge from "@/components/custom/StyledBadge";

interface ExperienceBadgesProps {
  parsedExperience: ParsedExperience;
}

const ExperienceBadges = ({ parsedExperience }: ExperienceBadgesProps) => {
  return (
    <div className="flex justify-between items-start mb-4">
      <div className="flex flex-col items-start gap-2 w-full md:w-auto">
        {parsedExperience.positions.map((position, index) => (
          <div key={index} className="flex gap-1">
            <StyledBadge variant="default">{position.title}</StyledBadge>
            <StyledBadge variant="secondary">{position.dateRange}</StyledBadge>
          </div>
        ))}
      </div>

      <div className="hidden md:flex justify-end">
        {parsedExperience.location && (
          <StyledBadge variant="outline">
            {parsedExperience.location}
          </StyledBadge>
        )}
      </div>
    </div>
  );
};

export default ExperienceBadges;
