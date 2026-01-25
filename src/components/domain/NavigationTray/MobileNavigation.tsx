import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetPortal,
  SheetOverlay,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, ArrowRightToLine } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  disabled?: boolean;
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
              <div className="flex flex-col">
                <span>Tap to</span>
                <span>close</span>
              </div>
            </div>
          </SheetOverlay>
          <SheetContent
            side="right"
            className="flex flex-col [&>button]:hidden"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex-1 flex flex-col justify-center">
              <nav className="flex flex-col gap-4">
                {items.map((item) => (
                  item.disabled ? (
                    <div
                      key={item.href}
                      className="text-lg font-mono px-4 py-2 flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="line-through decoration-2">{item.label}</span>
                      <span className="text-sm">Coming soon!</span>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => onOpenChange(false)}
                      className="text-lg font-mono hover:text-accent-foreground hover:bg-accent px-4 py-2 rounded-md transition-colors"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </nav>
            </div>
          </SheetContent>
        </SheetPortal>
    </Sheet>
  );
};

export default MobileNavigation;
