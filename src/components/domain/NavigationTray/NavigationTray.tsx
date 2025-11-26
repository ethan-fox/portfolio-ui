import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

interface NavItem {
  label: string;
  href: string;
  disabled?: boolean;
}

interface NavigationTrayProps {
  items: NavItem[];
}

const NavigationTray = ({ items }: NavigationTrayProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-backgrond border-b border-border">
      <div className="desktop:hidden">
        <MobileNavigation items={items} open={open} onOpenChange={setOpen}/>
      </div>

      <div className="hidden desktop:block">
        <DesktopNavigation items={items} />
      </div>
    </nav>
  );
};

export default NavigationTray;
