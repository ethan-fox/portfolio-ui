import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import AuthWidget from "@/components/domain/AuthWidget/AuthWidget";

interface NavItem {
  label: string;
  href: string;
}

interface NavigationTrayProps {
  items: NavItem[];
}

const NavigationTray = ({ items }: NavigationTrayProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-backgrond border-b border-border">
      <div className="w-full mx-auto py-4 px-4">
        <div className="md:hidden">
          <MobileNavigation items={items} open={open} onOpenChange={setOpen} />
        </div>

        <div className="hidden md:flex md:items-center md:justify-between">
          <div className="flex-1" />
          <DesktopNavigation items={items} />
          <div className="flex-1 flex justify-end">
            <AuthWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationTray;
