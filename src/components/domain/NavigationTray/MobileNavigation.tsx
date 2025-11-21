import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetPortal,
  SheetOverlay,
} from "@/components/ui/sheet";
import { Menu, ArrowRightToLine } from "lucide-react";
import { PlatformVariant } from "@/model/PlatformVariant";
import AuthWidget from "@/components/domain/AuthWidget/AuthWidget";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavigationProps {
  items: NavItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MobileNavigation = ({
  items,
  open,
  onOpenChange,
}: MobileNavigationProps) => {
  return (
    <div className="flex justify-center">
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetTrigger className="flex items-center gap-2 p-2 hover:bg-accent rounded-md">
          <Menu className="h-5 w-5" />
          <span className="text-sm font-mono">Menu</span>
        </SheetTrigger>
        <SheetPortal>
          <SheetOverlay className="flex items-center">
            <div className="text-white text-sm font-mono text-center w-1/4 sm:w-[calc(100%-24rem)] flex flex-col items-center gap-2">
              <ArrowRightToLine className="h-6 w-6" />
              <span>Tap to close</span>
            </div>
          </SheetOverlay>
          <SheetContent
            side="right"
            className="flex flex-col [&>button]:hidden"
          >
            <div className="flex-1 flex flex-col justify-center">
              <nav className="flex flex-col gap-4">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => onOpenChange(false)}
                    className="text-lg font-mono hover:text-accent-foreground hover:bg-accent px-4 py-2 rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="mb-4 p-4">
              <AuthWidget className="w-full" variant={PlatformVariant.MOBILE} />
            </div>
          </SheetContent>
        </SheetPortal>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
