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
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

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
                          "bg-secondary font-mono text-(--pinned-muted-foreground) cursor-not-allowed opacity-50"
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
                        "bg-secondary font-mono text-(--pinned-foreground) focus:bg-secondary focus:text-(--pinned-foreground), hover:bg-primary hover:text-(--pinned-background) hover:font-bold"
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
      <div className="flex-1 flex justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default DesktopNavigation;
