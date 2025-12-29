import { Card, CardContent } from "@/components/ui/card";

interface PrimarySkillCardProps {
  name: string;
  image: string;
  className?: string;
}

const PrimarySkillCard = ({ name, image, className }: PrimarySkillCardProps) => {
  return (
    <Card className={`p-0 gap-0 ${className}`}>
      <CardContent className="h-full flex flex-col items-center p-0">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            draggable={false}
            className="w-[70%] h-[70%] object-contain pointer-events-none select-none shrink-0"
          />
        </div>
        <p className="text-center text-sm font-semibold text-foreground w-full pb-[clamp(0.5rem,2vw,1rem)]">
          {name}
        </p>
      </CardContent>
    </Card>
  );
};

export default PrimarySkillCard;
