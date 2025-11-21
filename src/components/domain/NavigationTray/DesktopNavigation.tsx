import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import AuthWidget from "../AuthWidget/AuthWidget";
import { PlatformVariant } from "@/model/PlatformVariant";

interface NavItem {
  label: string;
  href: string;
}

interface DesktopNavigationProps {
  items: NavItem[];
}

const NAV_GAP = "clamp(1px,2vw,2rem)";

const DesktopNavigation = ({ items }: DesktopNavigationProps) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex-1" />
      <NavigationMenu>
        <NavigationMenuList className={`gap-[${NAV_GAP}]`}>
          {items.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
                <Link
                  to={item.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-secondary font-mono focus:bg-secondary focus:text-foreground, hover:bg-primary hover:text-background hover:font-bold"
                  )}
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className={`flex-1 flex justify-end ml-[${NAV_GAP}]`}>
        <AuthWidget variant={PlatformVariant.DESKTOP} />
      </div>
    </div>
  );
};

export default DesktopNavigation;
