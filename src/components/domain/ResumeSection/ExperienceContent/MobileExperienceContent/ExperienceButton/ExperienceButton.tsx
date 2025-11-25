import { Button } from '@/components/ui/button';

interface ExperienceButtonProps {
  title: string;
  onClick: () => void;
}

const ExperienceButton = ({ title, onClick }: ExperienceButtonProps) => {
  return (
    <Button
      variant="outline"
      className="w-full justify-start text-left font-semibold"
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default ExperienceButton;
