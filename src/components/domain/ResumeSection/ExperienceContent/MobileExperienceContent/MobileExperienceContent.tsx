import { useState } from 'react';
import ExperienceButton from './ExperienceButton/ExperienceButton';
import ExperienceSheet from './ExperienceSheet/ExperienceSheet';
import type { ParsedExperienceItem } from '@/model/component/ParsedSection';
import { consolidateDateRanges } from '../util/dateRange';

interface MobileExperienceContentProps {
  experienceItems: ParsedExperienceItem[];
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
          secondary={consolidateDateRanges(item.positions.map(p => p.dateRange))}
          onClick={() => handleButtonClick(index)}
        />
      ))}

      {selectedExperience && (
        <ExperienceSheet
          isOpen={isSheetOpen}
          onClose={handleSheetClose}
          title={selectedExperience.title}
          parsedExperience={{
            location: selectedExperience.location,
            positions: selectedExperience.positions,
            remainingContent: selectedExperience.remainingContent,
          }}
        />
      )}
    </div>
  );
};

export default MobileExperienceContent;
