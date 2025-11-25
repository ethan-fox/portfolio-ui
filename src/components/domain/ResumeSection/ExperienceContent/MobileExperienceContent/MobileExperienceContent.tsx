import { useState } from 'react';
import ExperienceButton from './ExperienceButton/ExperienceButton';
import ExperienceSheet from './ExperienceSheet/ExperienceSheet';

interface ExperienceItem {
  title: string;
  content: string;
}

interface MobileExperienceContentProps {
  experienceItems: ExperienceItem[];
}

const MobileExperienceContent = ({ experienceItems }: MobileExperienceContentProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
    setIsSheetOpen(true);
  };

  const handleSheetClose = () => {
    setIsSheetOpen(false);
  };

  const selectedExperience = selectedIndex !== null ? experienceItems[selectedIndex] : null;

  return (
    <div className="space-y-2">
      {experienceItems.map((item, index) => (
        <ExperienceButton
          key={`experience-${index}`}
          title={item.title}
          onClick={() => handleButtonClick(index)}
        />
      ))}

      {selectedExperience && (
        <ExperienceSheet
          isOpen={isSheetOpen}
          onClose={handleSheetClose}
          title={selectedExperience.title}
          content={selectedExperience.content}
        />
      )}
    </div>
  );
};

export default MobileExperienceContent;
