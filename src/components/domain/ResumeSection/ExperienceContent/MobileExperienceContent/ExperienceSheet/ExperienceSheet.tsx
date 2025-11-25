import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetPortal, SheetOverlay } from '@/components/ui/sheet';
import { ArrowDownToLine } from 'lucide-react';
import ExperienceSheetContent from './ExperienceSheetContent/ExperienceSheetContent';

interface ExperienceSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const ExperienceSheet = ({ isOpen, onClose, title, content }: ExperienceSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetPortal>
        <SheetOverlay className="flex justify-center backdrop-blur-sm transition-all duration-300">
          <div className="text-white text-md font-mono text-center flex flex-col items-center gap-2 h-[15vh] justify-center">
            <ArrowDownToLine className="h-6 w-6" />
            Tap to close
          </div>
        </SheetOverlay>
        <SheetContent side="bottom" className="h-[85vh] overflow-y-auto">
          <SheetHeader className="sticky top-0 bg-background">
            <SheetTitle>{title}</SheetTitle>
          </SheetHeader>
          <div className="mt-4">
            <ExperienceSheetContent content={content} />
          </div>
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
};

export default ExperienceSheet;
