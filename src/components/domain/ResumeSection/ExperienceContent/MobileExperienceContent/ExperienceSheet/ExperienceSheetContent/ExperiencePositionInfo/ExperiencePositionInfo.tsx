import type { PositionTitle } from "@/model/component/ParsedSection";
import { Separator } from "@/components/ui/separator";

interface ExperiencePositionInfoProps {
  positions: PositionTitle[];
}

const ExperiencePositionInfo = ({ positions }: ExperiencePositionInfoProps) => {
  return (
    <div className="space-y-3 my-4">
      {positions.map((position, index) => (
        <div key={index}>
          <div className="flex flex-col gap-1 mx-2">
            <p className="font-bold text-foreground">{position.title}</p>
            <p className="italic text-sm text-muted-foreground">
              {position.dateRange}
            </p>
          </div>
          <Separator className="mt-3" />
        </div>
      ))}
    </div>
  );
};

export default ExperiencePositionInfo;
