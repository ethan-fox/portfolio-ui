import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface DesktopNavigationProps {
  items: NavItem[];
}

const DesktopNavigation = ({ items }: DesktopNavigationProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-[clamp(1px,2vw,2rem)]">
        {items.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink asChild>
              <Link to={item.href} className={cn(navigationMenuTriggerStyle(), "bg-secondary font-mono")}>
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavigation;
