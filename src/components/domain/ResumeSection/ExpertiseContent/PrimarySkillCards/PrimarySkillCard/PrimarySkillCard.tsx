import { Card, CardContent } from "@/components/ui/card";

interface PrimarySkillCardProps {
  name: string;
  image: string;
  className?: string;
}

const PrimarySkillCard = ({ name, image, className }: PrimarySkillCardProps) => {
  return (
    <Card className={className}>
      <CardContent className="h-full flex flex-col items-center justify-between p-4">
        <img
          src={image}
          alt={name}
          draggable={false}
          className="w-full h-full object-contain pointer-events-none select-none"
        />
        <p className="text-center text-sm font-semibold text-foreground mt-2">
          {name}
        </p>
      </CardContent>
    </Card>
  );
};

export default PrimarySkillCard;
