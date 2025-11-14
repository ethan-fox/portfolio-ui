import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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
        <SheetTrigger className="p-2 hover:bg-accent rounded-md">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="flex flex-col gap-4 mt-8">
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
