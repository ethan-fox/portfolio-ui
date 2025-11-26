import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { LogOut, Loader2, X } from "lucide-react";

interface DesktopProfileSummaryProps {
  displayName: string | null;
  photoURL: string | null;
  onSignOut: () => Promise<void>;
  className?: string;
}

const DesktopProfileSummary = ({
  displayName,
  photoURL,
  onSignOut,
  className,
}: DesktopProfileSummaryProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await onSignOut();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className="cursor-pointer rounded-full hover:opacity-80 transition-opacity"
            aria-label="Your Profile"
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={photoURL || undefined} alt="Your Profile" />
              <AvatarFallback>{displayName?.charAt(0) || "?"}</AvatarFallback>
            </Avatar>
          </button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <div className="flex flex-col gap-2 items-start">
            <div className="flex items-center justify-between w-full">
              <span className="font-mono">Your Profile</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                aria-label="Close"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <Separator />
            <div className="flex items-center gap-2 w-full">
              <span className="font-semibold">{displayName}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                disabled={loading}
                className="cursor-pointer w-1/2 justify-start ml-auto"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <LogOut className="h-4 w-4 mr-2" />
                )}
                Sign Out
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DesktopProfileSummary;
