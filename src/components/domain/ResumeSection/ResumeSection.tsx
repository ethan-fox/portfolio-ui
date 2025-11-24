import Markdown from "react-markdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ResumeSectionProps } from "@/model/component/ResumeSection";
import { cn } from "@/lib/utils";

const ResumeSection = ({ title, content, styleConfig }: ResumeSectionProps) => {
  const customRenderer = styleConfig?.customRenderer;

  return (
    <Card className={cn(styleConfig?.cardClassName)}>
      <CardHeader className={cn(styleConfig?.headerClassName)}>
        <CardTitle className={cn(styleConfig?.titleClassName)}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className={cn("pt-6 text-left", styleConfig?.contentClassName)}>
        {customRenderer ? (
          customRenderer(content)
        ) : (
          <Markdown components={styleConfig?.markdownComponents}>
            {content}
          </Markdown>
        )}
      </CardContent>
    </Card>
  );
};

export default ResumeSection;
