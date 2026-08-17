import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { baseCardStyle } from "@/components/page/util/styleConfigFactory";

const sectionHeaderStyle = baseCardStyle().build();

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => (
  <Card className={sectionHeaderStyle.cardClassName}>
    <CardHeader className={sectionHeaderStyle.headerClassName}>
      <CardTitle className={sectionHeaderStyle.titleClassName}>{title}</CardTitle>
    </CardHeader>
  </Card>
);

export default SectionHeader;
