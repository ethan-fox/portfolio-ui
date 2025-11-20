import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const MobileNavigation = ({ items, open, onOpenChange }: MobileNavigationProps) => {
  return (
    <div className="flex justify-center">
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetTrigger className="flex items-center gap-2 p-2 hover:bg-accent rounded-md">
          <Menu className="h-5 w-5" />
          <span className="text-sm font-mono">Menu</span>
        </SheetTrigger>
        <SheetContent side="right" className="flex flex-col [&>button]:hidden">
          <div className="mt-8">
            <AuthWidget className="w-full" />
          </div>
          <nav className="flex flex-col gap-4 mt-auto pb-4">
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
          <SheetClose asChild>
            <Button variant="outline" className="w-full mt-auto mb-4">
              <X className="h-4 w-4 mr-2" />
              Close
            </Button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
