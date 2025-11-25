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
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <div className="flex items-center justify-center gap-2 w-full py-6">
          <Menu className="h-5 w-5" />
          <span className="text-sm font-mono">Menu</span>
        </div>
      </SheetTrigger>
      <SheetPortal>
          <SheetOverlay className="flex items-center backdrop-blur-sm transition-all duration-300">
            <div className="text-white text-sm font-mono text-center w-1/4 sm:w-[calc(100%-24rem)] flex flex-col items-center gap-2">
              <ArrowRightToLine className="h-6 w-6" />
              Tap to close
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
  );
};

export default MobileNavigation;
