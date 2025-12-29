import { PRIMARY_SKILLS } from "../constant";
import PrimarySkillCards from "../PrimarySkillCards/PrimarySkillCards";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface DesktopExpertiseContentProps {
  resumeSkills: string[];
}

const DesktopExpertiseContent = ({
  resumeSkills,
}: DesktopExpertiseContentProps) => {
  const primaryNames = PRIMARY_SKILLS.map((p) => p.name.toLowerCase());
  const secondarySkills = resumeSkills.filter(
    (skill) => !primaryNames.includes(skill.toLowerCase())
  );

  const remainder = secondarySkills.length % 3;
  const arrangedSkills = [...secondarySkills];

  if (remainder === 1) {
    arrangedSkills.splice(arrangedSkills.length - 1, 0, "");
  }

  return (
    <div className="flex flex-col items-center p-8 space-y-8">
      <div className="w-full max-w-[clamp(48rem,70vw,80rem)] space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Primary Skills</h3>
          <Separator />
        </div>
        <div className="flex justify-center">
          <PrimarySkillCards />
        </div>
      </div>

      {secondarySkills.length > 0 && (
        <div className="w-full max-w-[clamp(48rem,70vw,80rem)] space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Other Competencies</h3>
            <Separator />
          </div>
          <ScrollArea className="h-[clamp(20rem,40vh,40rem)]">
            <Table className="table-fixed">
              <TableBody>
                {Array.from({
                  length: Math.ceil(arrangedSkills.length / 3),
                }).map((_, rowIndex) => (
                  <TableRow
                    key={rowIndex}
                    className="hover:bg-transparent border-none"
                  >
                    {[0, 1, 2].map((colIndex) => {
                      const skillIndex = rowIndex * 3 + colIndex;
                      const skill = arrangedSkills[skillIndex];
                      const isEmpty = !skill;
                      return (
                        <TableCell
                          key={colIndex}
                          className={`w-1/3 text-center ${
                            isEmpty
                              ? ""
                              : "hover:bg-muted/50 transition-colors cursor-pointer rounded"
                          }`}
                        >
                          {skill || ""}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
      )}
    </div>
  );
};

export default DesktopExpertiseContent;
