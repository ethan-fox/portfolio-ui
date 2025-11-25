import { useState, useEffect } from "react";
import { contentClient } from "@/client/ContentClient";
import { parseByPattern } from "@/util/resumeSectionParser";
import {
  SECTION_STYLES,
  DEFAULT_SECTION_STYLE,
} from "@/components/page/util/constant";
import ResumeSection from "../domain/ResumeSection/ResumeSection";
import PageContainer from "@/components/custom/PageContainer/PageContainer";
import type { ParsedSection } from "@/model/component/ParsedSection";

const HomePage = () => {
  const [sections, setSections] = useState<ParsedSection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        setIsLoading(true);
        const data = await contentClient.getAbout();
        const parsedSections = parseByPattern(
          data.content,
          "---",
          /^#\s+(.+)$/m
        );
        setSections(parsedSections);
        setError(null);
      } catch (err) {
        setError("Failed to load resume content");
        console.error("Error fetching resume:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResume();
  }, []);

  return (
    <PageContainer>
      {isLoading && <p className="text-muted-foreground">Loading...</p>}

      {error && <p className="text-destructive">{error}</p>}

      {!isLoading && !error && sections.map((section, index) => {
        const styleConfig =
          SECTION_STYLES[section.title] || DEFAULT_SECTION_STYLE;
        return (
          <ResumeSection
            key={`${section.title}-${index}`}
            title={section.title}
            content={section.content}
            styleConfig={styleConfig}
          />
        );
      })}
    </PageContainer>
  );
};

export default HomePage;
