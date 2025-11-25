import type { ParsedExperience } from "@/model/component/ParsedSection";
import StyledBadge from "@/components/custom/StyledBadge";

interface ExperienceSheetBadgesProps {
  parsedExperience: ParsedExperience;
}

const ExperienceSheetBadges = ({ parsedExperience }: ExperienceSheetBadgesProps) => {
  return (
    <div className="space-y-4 mb-4">
      {parsedExperience.location && (
        <div className="flex justify-center">
          <StyledBadge variant="outline">
            {parsedExperience.location}
          </StyledBadge>
        </div>
      )}

      <div className="space-y-2">
        {parsedExperience.positions.map((position, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <StyledBadge variant="default">{position.title}</StyledBadge>
            <StyledBadge variant="secondary">{position.dateRange}</StyledBadge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSheetBadges;
