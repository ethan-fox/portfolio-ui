import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import AuthWidget from "../AuthWidget/AuthWidget";

interface NavItem {
  label: string;
  href: string;
  disabled?: boolean;
}

interface DesktopNavigationProps {
  items: NavItem[];
}

const DesktopNavigation = ({ items }: DesktopNavigationProps) => {
  return (
    <div className="flex items-center justify-between w-full mx-auto py-4 px-4">
      <div className="flex-1" />
      <TooltipProvider>
        <NavigationMenu>
          <NavigationMenuList className={`gap-[clamp(1px,2vw,2rem)]`}>
            {items.map((item) => (
              <NavigationMenuItem key={item.href}>
                {item.disabled ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-secondary font-mono text-muted-foreground cursor-not-allowed opacity-50"
                        )}
                      >
                        {item.label}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Coming soon!</p>
                    </TooltipContent>
                  </Tooltip>
                ) : (
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
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </TooltipProvider>
      <div className={`flex-1 flex justify-end ml-[clamp(1px,2vw,2rem)]`}>
        <AuthWidget />
      </div>
    </div>
  );
};

export default DesktopNavigation;
