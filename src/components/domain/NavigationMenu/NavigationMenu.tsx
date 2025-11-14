import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

interface NavItem {
  label: string;
  href: string;
}

interface NavigationMenuProps {
  items: NavItem[];
}

const NavigationMenu = ({ items }: NavigationMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-backgrond border-b border-border">
      <div className="max-w-2xl mx-auto py-4 px-4">
        <div className="md:hidden">
          <MobileNavigation items={items} open={open} onOpenChange={setOpen} />
        </div>

        <div className="hidden md:flex md:justify-center">
          <DesktopNavigation items={items} />
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
