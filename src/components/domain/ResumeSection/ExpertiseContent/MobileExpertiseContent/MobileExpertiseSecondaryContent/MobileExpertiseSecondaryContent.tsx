import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NotebookPen } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface MobileExpertiseSecondaryContentProps {
  secondarySkills: string[];
}

const MobileExpertiseSecondaryContent = ({
  secondarySkills,
}: MobileExpertiseSecondaryContentProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-4 pb-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full">
            View more Skills & Tools
            <NotebookPen className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Other Competencies</DialogTitle>
            <DialogDescription className="sr-only">
              Additional skills & tools 
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[60vh] pr-4">
            <div>
              {secondarySkills.map((skill, index) => (
                <div key={index}>
                  <Separator />
                  <div className="text-sm py-3 px-3">
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MobileExpertiseSecondaryContent;
