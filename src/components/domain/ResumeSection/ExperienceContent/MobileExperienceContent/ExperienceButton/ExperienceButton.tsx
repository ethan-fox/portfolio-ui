import { Button } from "@/components/ui/button";
import { PanelBottomOpen } from "lucide-react";

interface ExperienceButtonProps {
  title: string;
  secondary: string;
  onClick: () => void;
}

const ExperienceButton = ({
  title,
  secondary,
  onClick,
}: ExperienceButtonProps) => {
  return (
    <Button
      variant="outline"
      className="w-full justify-between text-left font-semibold h-auto py-3 gap-8"
      onClick={onClick}
    >
      <div className="flex flex-col items-start gap-1">
        <span>{title}</span>
        <span className="text-sm italic font-normal text-muted-foreground">
          {secondary}
        </span>
      </div>
      <PanelBottomOpen />
    </Button>
  );
};

export default ExperienceButton;
