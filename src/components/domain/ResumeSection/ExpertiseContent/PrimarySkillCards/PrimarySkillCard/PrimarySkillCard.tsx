import { Card, CardContent } from "@/components/ui/card";

interface PrimarySkillCardProps {
  name: string;
  image: string;
  className?: string;
}

const PrimarySkillCard = ({ name, image, className }: PrimarySkillCardProps) => {
  // NOTE rendering `Card` design as invisible since I can't figure out the responsive
  // styling out - especially on higher-res devices
  return (
    <Card className={`p-0 gap-0 border-0 bg-transparent shadow-none ${className}`}>
      <CardContent className="h-full flex flex-col items-center p-0">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            draggable={false}
            className="w-20 h-20 desktop:w-24 desktop:h-24 object-contain pointer-events-none select-none shrink-0"
          />
        </div>
        <p className="text-center text-sm font-semibold text-foreground w-full pb-0.5">
          {name}
        </p>
      </CardContent>
    </Card>
  );
};

export default PrimarySkillCard;
