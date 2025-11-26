import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetPortal,
  SheetOverlay,
} from "@/components/ui/sheet";
import { ArrowDownToLine } from "lucide-react";
import ExperienceSheetContent from "./ExperienceSheetContent/ExperienceSheetContent";
import type { ParsedExperience } from "@/model/component/ParsedExperience";

interface ExperienceSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  parsedExperience: ParsedExperience;
}

const ExperienceSheet = ({
  isOpen,
  onClose,
  title,
  parsedExperience,
}: ExperienceSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetPortal>
        <SheetOverlay className="flex justify-center backdrop-blur-sm transition-all duration-300">
          <div className="text-white text-md font-mono text-center flex flex-col items-center gap-2 h-[15vh] justify-center">
            <ArrowDownToLine className="h-6 w-6" />
            Tap to close
          </div>
        </SheetOverlay>
        <SheetContent
          side="bottom"
          className="h-[85vh] overflow-y-auto [&>button]:hidden"
        >
          <SheetHeader className="sticky top-0 bg-background shadow-lg">
            <SheetTitle>{title}</SheetTitle>
          </SheetHeader>
          <ExperienceSheetContent parsedExperience={parsedExperience} />
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
};

export default ExperienceSheet;
