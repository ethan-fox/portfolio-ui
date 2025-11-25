import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StyledBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
}

const StyledBadge = ({ children, variant = "default", className }: StyledBadgeProps) => {
  return (
    <Badge variant={variant} className={cn("font-bold", className)}>
      {children}
    </Badge>
  );
};

export default StyledBadge;
